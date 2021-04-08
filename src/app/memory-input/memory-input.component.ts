import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Memory } from '../memory';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-memory-input',
  templateUrl: './memory-input.component.html',
  styleUrls: ['./memory-input.component.scss']
})
export class MemoryInputComponent implements OnInit {

  newMemory!: Memory;
  newMemoryImage!: ImageBitmap;
  selectedFile!: File;
  newMemoryForm!: FormGroup;
  SERVER_URL = "http://localhost:3000/upload"

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http:HttpClient,
  ) {}

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      this.newMemoryForm.get('newMemoryImage')?.setValue(selectedFile);
  }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.newMemoryForm.get('profile') ?.value);
    this.http.post('localStorage',formData).subscribe(res => {console.log(res);

    });
  }
  saveNewMemory() {
  }



  ngOnInit() {
    this.newMemoryForm = this.formBuilder.group({
      profile: [' ']
    });
  }

}
