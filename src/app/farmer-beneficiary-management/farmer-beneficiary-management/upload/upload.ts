import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
// import * as XLSX from 'xlsx';


@Component({
  selector: 'app-upload',
  imports: [],
  templateUrl: './upload.html',
  styleUrl: './upload.scss'
})
export class UploadComponent {
  message: string = '';
  parsedData: any;

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (!file) {
      this.message = 'No file selected.';
      return;
    }

    const fileName = file.name;
    const fileExtension = fileName.split('.').pop()?.toLowerCase();

    if (fileExtension === 'csv') {
      // this.parseCsv(file);
    } else if (fileExtension === 'xml') {
      this.parseXml(file);
    } else {
      this.message = 'Unsupported file type. Please upload a CSV or XML file.';
      this.parsedData = null;
    }
  }

  // private parseCsv(file: File) {
  //   Papa.parse(file, {
  //     header: true,
  //     dynamicTyping: true,
  //     complete: (results:any) => {
  //       this.parsedData = results.data;
  //       this.message = 'CSV file parsed successfully.';
  //     },
  //     error: (error:any) => {
  //       this.message = 'Error parsing CSV file.';
  //       console.error(error);
  //     }
  //   });
  // }

  private parseXml(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const xmlString = e.target.result;
      try {
        // You would use a dedicated library here for robust parsing.
        // This is a simple DOM-based approach for demonstration.
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        
        // Convert the XML to a JSON object (a common task)
        const parsedObject = this.xmlToJson(xmlDoc);
        this.parsedData = parsedObject;
        this.message = 'XML file parsed successfully.';

      } catch (error) {
        this.message = 'Error parsing XML file.';
        console.error(error);
      }
    };
    reader.readAsText(file);
  }

  // A simple function to convert XML to JSON (for demonstration)
  private xmlToJson(xml: any) {
    // This is a simplified function and may not handle complex XML structures
    let obj: any = {};
    if (xml.nodeType === 1) { // element
      if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
        for (let j = 0; j < xml.attributes.length; j++) {
          let attribute = xml.attributes.item(j);
          obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType === 3) { // text
      obj = xml.nodeValue;
    }
    // do children
    if (xml.hasChildNodes() && xml.childNodes.length === 1 && xml.childNodes[0].nodeType === 3) {
      obj = xml.childNodes[0].nodeValue;
    } else {
      for (let i = 0; i < xml.childNodes.length; i++) {
        let item = xml.childNodes.item(i);
        let nodeName = item.nodeName;
        if (typeof (obj[nodeName]) == "undefined") {
          obj[nodeName] = this.xmlToJson(item);
        } else {
          if (typeof (obj[nodeName].push) == "undefined") {
            let old = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(old);
          }
          obj[nodeName].push(this.xmlToJson(item));
        }
      }
    }
    return obj;
  }
}
