/*
 * Copyright (c) 2023 Sabu Francis
 *
 * Licensed under the MIT License (MIT).

 * Function to generate HTML table for a collection
 * that allows CRUD function. Made specifically for 
 * Pocketbase. 
 * 
 * This uses picoCss 
 * 
 * See how to call this in tableEditor.html
*/

var generateEditorTable;
var createRecord;
var updateRecord;
var deleteRecord;
var editRecord;
var getVal;
var doSel;

let jsonSchema =  {};
let jsonEditors = {}; //Various jsonEditors are in this hash

(function () {

let globGetRecords
let globDelRecord 
let globCreateRecord
let globUpdateRecord
let globMultiDelRecords
let lastPrompt
let relations 
let lastCollection 
let lastTableContainer


function reGenerateEditorTable()
     {
       
        generateEditorTable(lastCollection,lastTableContainer,
            lastPrompt,
            globGetRecords,
            globDelRecord ,
            globCreateRecord,
            globUpdateRecord,
            globMultiDelRecords,
            relations,
            jsonSchema
            )

     }

generateEditorTable = function (collection,tableContainer,
            prompt,
            globGetRecFunc,
            globDelFunc,
            globCreateFunc,
            globUpdateFunc,
            globMultiDelFunc,
            whichRelations,
            jsonSchemaObj
            ) {

    jsonSchema = jsonSchemaObj            
    lastPrompt = prompt

                //function pointers
    globGetRecords=globGetRecFunc
    globDelRecord =globDelFunc
    globCreateRecord=globCreateFunc
    globUpdateRecord=globUpdateFunc
    globMultiDelRecords = globMultiDelFunc
    relations = whichRelations 
    
    lastCollection = collection 
    lastTableContainer = tableContainer

    
    const tableID = `${collection.name}Table`
    const existTableContainer = document.getElementById(tableContainer)
    existTableContainer.innerHTML=''; 

    //Get records just in time
    records = null 
    
    globGetRecords(collection.name)
    
    // start polling at an interval until the data is found at the global
    var intvl = setInterval(function() {
    
    //Timer repeats every 100 ms to check if the async function has finished! 
    //If indeed records have finally arrived ... then do the rest of the logic!
    
    if (records) 
     { 
    
    clearInterval(intvl); //this is critical. Timer must stop once records are found!
 
    const table = document.createElement('table')
    table.setAttribute('role','grid')

    table.setAttribute('style','font-size:12pt')
    
    table.setAttribute('id', tableID)

    // Create table header

    const headerRow = table.insertRow()
    const checkboxHeader = headerRow.insertCell(0)
    checkboxHeader.innerHTML = '<i>Actions</i>'

                                 
    collection.schema.forEach(field => {
        const headerCell = headerRow.insertCell()
        headerCell.innerHTML = '<b>'+firstUpperCase(field.name)+'</b>'
    })


    // Create table body
     records.forEach((record,rowidx) => {
        const row = table.insertRow()
        
        // Add checkbox in 1st cell
        const checkboxCell = row.insertCell(0)
        checkboxCell.setAttribute('align','left')
        checkboxCell.setAttribute('valign','center')
        checkboxCell.setAttribute('width','150px')
        checkboxCell.innerHTML = `<input type="checkbox"  id="sel_${record.id}" onclick='doSel("${collection.name}",this,"${record.id}")'>`
        checkboxCell.setAttribute('align','left')
        checkboxCell.setAttribute('valign','top')
    
        checkboxCell.innerHTML += `<a href='#!' onclick="editRecord('${collection.name}', '${record.id}')">Edit</a>
                                 <a href='#!' onclick="deleteRecord('${collection.name}','${record.id}')">Del</a>`


        // Add record fields
        collection.schema.forEach((field, index) => {
            const cell = row.insertCell(index + 1)
            cell.setAttribute('align','left')
            cell.setAttribute('valign','top')

            switch(field.type){
                case 'json': 
                        cell.innerHTML = JSON.stringify(record[field.name])
                        break
                case 'relation':
                        
                        try {
                             cell.innerHTML = record.expand[field.name][field.options.displayFields[0]] //username
                        }  catch(e){
                            
                            cell.innerHTML = ''
                        }
                        break
                default: 
                        cell.innerHTML = record[field.name]
                        break
              }
          })

        })
     
    

    // Create edit form
    const oeditForm = document.createElement('div') 
    const editForm = document.createElement('div')
    editForm.setAttribute('id', `${collection.name}Edit`)
         
         let formdiv1 = document.createElement('div') 
         let formdiv2 = document.createElement('div')
         let elen = Math.floor(collection.schema.length / 2)
         let isgridded = false 
         if(elen >4) {
              isgridded = true  
              editForm.setAttribute('class','grid')
             }

    collection.schema.forEach((field,idx) => {
        const label = document.createElement('label')
        label.textContent = firstUpperCase(field.name+' ')
       
        const input = getProperInput(field)

        input.setAttribute('id', `${collection.name}_${field.name}`)
        
        let whichDiv
        if(isgridded){
         if(idx <=elen) {
            whichDiv = formdiv1
         } else {
            whichDiv = formdiv2 
         }    
        } else {
            whichDiv = editForm
        }
            whichDiv.appendChild(label)
            label.appendChild(input)
            whichDiv.appendChild(document.createElement('br'))
    
      })
    
    if(isgridded){
        editForm.appendChild(formdiv1)
        editForm.appendChild(formdiv2)
    }
    
    oeditForm.appendChild(editForm)


    const id_input = document.createElement('input')
    id_input.setAttribute('type', 'hidden')
    id_input.setAttribute('id', `${collection.name}_id`)
    editForm.appendChild(id_input)

    const span = document.createElement('div')
    span.setAttribute('class','grid')

    oeditForm.appendChild(span)

    const updButton = document.createElement('button')
    updButton.setAttribute('style','width: 30%')
    updButton.setAttribute('id','updbtn')
    updButton.textContent = 'Update'
    updButton.disabled = true
    updButton.setAttribute('onclick',`updateRecord('${collection.name}',getVal('${collection.name}_id'))`)
    span.appendChild(updButton)

    
    const createButton = document.createElement('button')
    createButton.setAttribute('style','width: 30%')
    createButton.textContent = 'Create' 
    createButton.setAttribute('onclick',`createRecord('${collection.name}')`)
    span.appendChild(createButton)
    
    const cont = document.getElementById(tableContainer)
    cont.appendChild(createHTMLElem(`<h4> ${firstUpperCase(collection.name)} </h4>`))

    const promptSpan = document.createElement('span')
    promptSpan.innerHTML = prompt 
    cont.appendChild(promptSpan)

    const details = document.createElement('details')
    details.setAttribute('id','theDetails')
    const summary = document.createElement('summary')
    summary.innerHTML = 'Create/Update'
    details.appendChild(summary)
    details.appendChild(oeditForm)
    cont.appendChild(details)


      
    if(records.length > 0 ){
 
        const delSel  = document.createElement('a')
    
        delSel.setAttribute('id',`${collection.name}_delsel`)
        delSel.setAttribute('href',`#!`)
    
        delSel.setAttribute("onclick","alert('Nothing selected');return false")
        delSel.textContent= 'Delete selected'
        
       
        cont.appendChild(delSel)

     
       
        const tablediv = document.createElement('div')
        tablediv.setAttribute('style','overflow-x: auto;max-width: 100%; white-space: nowrap;')
        tablediv.appendChild(table)
        cont.appendChild(tablediv)
    } else {
        document.getElementById("theDetails").open=true
        document.getElementById('updbtn').disabled=true
       }

    
                    
    } //records were found 

},
  100 //ms interval check
  ); 


    
    
}

function firstUpperCase(s){
    return s.charAt(0).toUpperCase() + s.replace('_',' ').slice(1)
 }
 

function createHTMLElem(htmlString) {
    var div = document.createElement('div')
    div.innerHTML = htmlString.trim()
    // Change this to div.childNodes to support multiple top-level nodes.
    return div.firstChild
  }

  getVal = function  (Id,Type){
        

        if(Type && (Type == 'json')){
            
                let obj
                try {
                obj = JSON.parse(document.getElementById(Id).value)
                 
                } catch(e){
                    obj= {}
                }
             return obj   
        }

        let val = document.getElementById(Id).value
        
        if(Type && (Type == 'date')){
        try{
            const date = new Date(val)
            val = date.toISOString()
            val = val.replace('T',' ')
          }catch(e){
             val = ''
          }
        }
        return val 
  } 


function getProperInput(field){
    let input
    switch(field.type) {

        case "text":
             if (field.options.max) {
                //If max length was set, it is assumed that this is actually a textarea element and NOT "input type=text"         
                input = document.createElement('textarea')
                input.setAttribute('rows','6')
                input.setAttribute('cols','60')
                input.setAttribute('maxlength',field.options.max)
                
             } else
              { 
              input = document.createElement('input')
              }
             break


        case "number": 
             input = document.createElement('input')
             input.setAttribute('type','number')
             break

        case "url":
             input = document.createElement('input')
         
             break
          
        case "date":
             input = document.createElement('input')
             input.setAttribute('type','datetime-local')
          break
          

        case "bool":
            input = document.createElement('input')
            input.setAttribute('type','checkbox')
            break

        case "json":
            
            input = document.createElement('details')
            const JField = `json_${field.name}`
            input.setAttribute('id',JField)
            const jSummary =document.createElement('summary')
            jSummary.innerText='Data Editor'
            input.appendChild(jSummary)
            let fieldProperties = jsonSchema[field.name]
            
            const jsoneditor = new JSONEditor(input, {
                compact: true,
                disable_collapse: true,
                no_additional_properties: true,
                disable_properties: true,
                disable_edit_json: true,
                schema:{
                    "title": " ",
                    "type": "object",
                    "properties": fieldProperties
                }
            })
            jsonEditors[JField] = jsoneditor
            break

        case "editor": 
          input = document.createElement('textarea')
          input.setAttribute('rows','6')
          input.setAttribute('cols','60')
          
          break

        
        case "relation":
            input = document.createElement('select')
            if(!field.options.maxSelect) {
                input.setAttribute('multiple',true)  
            }
            let rels = relations[field.name] 
            if(rels)
              rels.forEach((e)=>{
                const optionElement = document.createElement('option')
                optionElement.textContent = e[  field.options.displayFields[0]  ]//username
                optionElement.value = e.id
    
                input.appendChild(optionElement)
              })
            break  
        case "select":
           let options = field.options.values
           input = document.createElement('select')
           if (field.options.maxSelect > 1) {
              input.setAttribute('multiple',true)
           }
           for (const optionText of options) {
            const optionElement = document.createElement('option')
            optionElement.textContent = optionText
            optionElement.value = optionText

            input.appendChild(optionElement)
           }
         
          
          break
          
        case "file":
            input = document.createElement('input')
            input.setAttribute('type','file')
          break

         default: 
             alert(field.type)
             break 
    
      }

      return input 
}


// Function to handle record editing
editRecord = function (collectionName, recordId) {
    
    // Set values in the edit form
    records.forEach(record => {
        if (record.id === recordId) {
            collection.schema.forEach(field => {
                const input = document.getElementById(`${collectionName}_${field.name}`)
                //NOTE: input field for JSON is undefined above!
                switch(field.type) 
                 {
                    case 'json':
                            jsonEditors[`json_${field.name}`].setValue(record[field.name])
                            //input.value = JSON.stringify(record[field.name])
                            break    
                   
                    case 'relation':
                           try {
                             input.value = record.expand[field.name].id
                           } catch(e){
                            input.value = ''
                           }  
                           break

                    case 'date':

                            const dateStr = record[field.name].replace(' ','T').trim(); 
                            if(dateStr != ''){
                            let dateObj = new Date(dateStr);

                            // Convert to local timezone
                            let localDate = new Date(dateObj.getTime() - (dateObj.getTimezoneOffset() * 60000));
                            
                            // Format the date for input field
                            let formattedDate = localDate.toISOString().split('.')[0];
                            
                            input.value = formattedDate
                            }

                            break

                    default: 
                            input.value = record[field.name]
                            break
                            
               }
            }) 

            const idInput = document.getElementById(`${collectionName}_id`)
            idInput.value = recordId

            // Show the edit form
            const editForm = document.getElementById(`${collectionName}Edit`)
            editForm.style.display = 'block'
            document.getElementById("theDetails").open=true
            document.getElementById('updbtn').disabled=false
        }
    })
}

let selectedRows = []
doSel = function (collnm,whatCb,Id){
    const d= document.getElementById(`${collnm}_delsel`)

    if(whatCb.checked){
        selectedRows.push(Id)
        console.log('Added ',Id)
        d.setAttribute("onclick",`delSelected("${collnm}")`)    
    } else {
        const index = selectedRows.indexOf(Id)
            if (index > -1) { // only splice array when item is found
                selectedRows.splice(index, 1) // 2nd parameter means remove one item only
                console.log('Removed ',Id)
                d.setAttribute("onclick","alert('Nothing selected');return false")
            }
    }
}

delSelected = function (collName){

    console.log("Deleting multiple ...")
    console.log(selectedRows)
    globMultiDelRecords(collName,selectedRows)

    reGenerateEditorTable()
}

createRecord = function (collName){
    let obj={}
    collection.schema.forEach(field => {
        const id= `${collName}_${field.name}`
        if(field.type == 'json'){
            obj[field.name] = jsonEditors[`json_${field.name}`].getValue()
        } 
        else{
            obj[field.name]= getVal(id,field.type)
          }      
        })
    console.log('Creating ...')
    console.log(obj)
    globCreateRecord(collName,obj)

    reGenerateEditorTable()
    }

updateRecord = function (collName,id){
        let obj={}
        collection.schema.forEach(field => {
             const id= `${collName}_${field.name}`

                let v 
                if(field.type == 'json'){
                    v = jsonEditors[`json_${field.name}`].getValue()
                } 
                else
                 { 
                  v = getVal(id,field.type)
                 }
                // alert(`V for ${field.type} is ${v}` )
                
                obj[field.name]= v      
            })
        
        obj['id']=id
   
        globUpdateRecord(collName,obj)
        
        reGenerateEditorTable()

        }

// Function to handle record deletion
deleteRecord = function (collectionName, recordId) {
   
    if(confirm('Are you sure you want to delete this?')){
         globDelRecord(collectionName,recordId)

    }
    console.log(`Deleting ${recordId} from  ${collectionName}`)

   reGenerateEditorTable()

}
    
})(); 
