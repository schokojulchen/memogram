import { MemoryService } from './../memory.service';
import { ActivatedRoute, ɵEmptyOutletComponent } from '@angular/router';
import { AfterViewInit, Component, OnInit, Output} from '@angular/core';
import { Memory } from '../memory';
import { HttpClient} from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { DatePipe} from '@angular/common';



@Component({
  selector: 'app-memory-input',
  templateUrl: './memory-input.component.html',
  styleUrls: ['./memory-input.component.scss']
})

export class MemoryInputComponent  implements OnInit {
  newMemory!: Memory;
  newMemoryImage!: ImageBitmap;
  selectedFile!: File;
  showHintLabelDate: boolean;
  showHintLabelText: boolean;
  newMemoryTags: string ="";


  url = "assets/picPlaceholder.jpg";

  newMemoryForm = new FormGroup({
    newMemoryDate: new FormControl('',Validators.required),
    newMemoryText: new FormControl('',Validators.required),
    newMemoryImage: new FormControl(),
  })


  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private memoryService: MemoryService,

    /*private datePipe: DatePipe,*/
  ){ this.showHintLabelDate = false;
     this.showHintLabelText = false;
  }

  get newMemoryText(): any{
    return this.newMemoryForm.get('newMemoryText');
  }
  get newMemoryDate(): any{
    return this.newMemoryForm.get('newMemoryDate');
  }

tagCreator(newText: string) {


  const hashTag ="#";
  const spaceTag = " ";


let position = newText.indexOf('#');
this.newMemoryTags="";

while (position != -1) {
  var searchIndex = position;

  while (newText.charAt(searchIndex + 1) != spaceTag && searchIndex<newText.length) {
    this.newMemoryTags = this.newMemoryTags + newText.charAt(searchIndex+1);
    searchIndex = searchIndex+1;

  }
  this.newMemoryTags = this.newMemoryTags + ",";
  position = newText.indexOf('#', position + 1);
}
return
}



  onImageFileSelected(event: any) {
   if (event.target.files.length > 0) {
     console.log(event);
    var reader = new FileReader()
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event: any) => {
      this.url = event.target.result}
    this.selectedFile = event.target.files[0] as File;
  }
  }

  resetForm() {
    this.newMemoryForm.reset();
  this.url="assets/picPlaceholder.jpg";
  }

  onSubmit() {
    const formDataNewMemory = new FormData();
    this.showHintLabelDate = false;
    this.showHintLabelText = false;

    if (this.newMemoryForm.valid) {
    this.tagCreator(this.newMemoryForm.get('newMemoryText')?.value);

    formDataNewMemory.append('text', this.newMemoryForm.get('newMemoryText')?.value);
    formDataNewMemory.append('tags', this.newMemoryTags);

    /*formDataNewMemory.append('creationDate', this.newMemoryForm.get('newMemoryDate')?.value);*/
    formDataNewMemory.append('creationDate', '2021-04-07T19:02:57.860Z');
    formDataNewMemory.append('media', this.selectedFile);


    this.memoryService.createMemory(formDataNewMemory);

    console.log(this.newMemoryForm.get('newMemoryText')?.value);
    console.log(this.newMemoryTags);
    console.log(this.newMemoryForm.get('newMemoryDate')?.value);
    console.log(this.selectedFile);

    this.resetForm();
    this.showHintLabelDate = false;
    this.showHintLabelText = false;
    }
    else {
      if (this.newMemoryDate.invalid) {
      this.showHintLabelDate = true;}
      if (this.newMemoryText.invalid) {
      this.showHintLabelText = true; }
    }
  }

  ngOnInit(): void {
  }
}
