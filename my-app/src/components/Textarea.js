import React , {useState} from 'react'


export default function Textarea(props) {

  const handelupclick=()=>{
    console.log("change upper to lower");
    let newtext = text.toUpperCase();
    setText(newtext);
};



const handellowclick=()=>{
  console.log("change upper to lower");
  let newText = text.toLowerCase();
  setText(newText);
};


const handletocopy=()=>{

  let text = document.getElementById("formGroupExampleInput");
  text.select();
  navigator.clipboard.writeText(text.value);

}

const handletoremoveextraspaces=()=>{
  let newtext = text.split((/[ ]+/));
  setText(newtext.join("  "));
}

/*const handletofindduplicates=()=>{

  var text=document.getElementById("formGroupExampleInput");
  let newtext =text.element.select();
  setText(newtext)

}*/


const [text , setText]= useState("Enter Text Here");


  return (
    <>
    <div>

      
    
<div className="container"  style={{Color:props.mode==='dark'?'white':'black'}}><div className="mb-3"  style={{color:props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>

  <textarea className="form-control" value={text} id="formGroupExampleInput" onChange={(e)=>setText(e.target.value)} style={{backgroundColor: props.mode==='dark'?'#130f33':'white' ,  color:props.mode==='dark'?'white':'black'}}  rows="8" />
  <button type="button" class="btn btn-primary mx-1 my-2"  onClick={handelupclick}>LOWER TO UPPER</button>
  <button type="button" class="btn btn-primary mx-1 my-2"  onClick={handellowclick}>UPPER TO LOWER</button>
  <button type="button" class="btn btn-primary mx-1 my-2"  onClick={handletocopy}>Copy Text</button>
  <button type="button" class="btn btn-primary mx-1 my-2"  onClick={handletoremoveextraspaces}>Remove Extra Spaces</button>







  <h3>
    Your Text Summary
  </h3>
  <p>
  <strong>{text.split(" ").length} </strong> words  and <strong>{text.length} </strong>characters
  </p>

  <h3>Preview</h3>
  <p>{text}</p>

</div>
    </div>

    </div>

    </>
  )
}


