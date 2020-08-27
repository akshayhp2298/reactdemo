import React, { useState } from "react";
import ReactFileReader from "react-file-reader";
export default (props) => {
  const [isCSV, changeCSV] = useState(false);
  const handleFiles = async (files) => {
    var reader = new FileReader();
    let doc={}
    reader.onload = await function (e) {
      // Use reader.result
      const data = reader.result
      const string = data.split('\n')[0].split(' ')
      doc = {
          address:string[0],
          bedRoom:string[1],
          bathRoom:string[2],
          description:string[3]
      }

    };
    console.log(doc)
    props.handleChange(2);
    reader.readAsText(files[0]);
  };
  return (
    <div>
      <h1 className="badge badge-secondary">Step One</h1>
      <div className="">
        <button
          type="button"
          class="btn btn-primary"
          onClick={() => {
            changeCSV(!isCSV);
          }}
        >
          Upload CSV
        </button>
        <button
          type="button"
          class="btn btn-success"
          onClick={() => {
            console.log("on click");
            props.handleChange(1);
          }}
        >
          Go to next Tab
        </button>

        {isCSV && (
          <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
            <button className="btn">Upload</button>
          </ReactFileReader>
        )}
      </div>
    </div>
  );
};
