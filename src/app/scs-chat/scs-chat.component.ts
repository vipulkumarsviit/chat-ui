import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PlugoService } from '../plugo.service';
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-scs-chat',
  templateUrl: './scs-chat.component.html',
  styleUrls: ['./scs-chat.component.css']
})
export class ScsChatComponent implements OnInit {
  chatSession: any;
  currentCommands: Array<any> = [];
  conversations: Array<any> = [];
  addCommandForm: FormGroup;
  allCommands: Array<any> = [];
  encryptMode: boolean;
  textToConvert: string;
  password: string;
  conversionOutput: string;

  constructor(private plugoService: PlugoService, private fb: FormBuilder) {
    this.encryptMode = true;
    this.textToConvert = 'Vipul';
    this.password = 'Kumar';
  }

  ngOnInit() {
    this.convertText();
    this.createCommandForm();
    this.currentCommands = [];
    this.conversations = [];
    /* this.initializeChatSession();*/
    this.getAllCommands();

  }
  createCommandForm() {
    this.addCommandForm = this.fb.group({
      name: [null],
      response: [null],
      nextResponse: [null],
      pid: [null]
    });
  }
  onSubmit() {
    console.log(this.addCommandForm.value);
    this.plugoService.saveCommand(this.addCommandForm.value).subscribe((resp) => {
      console.log(resp);
      this.ngOnInit();
    });
  }
  getAllCommands() {
    this.plugoService.getAllCommands().subscribe((resp: any) => {
      this.allCommands = resp;
    });
  }
  initializeChatSession() {
    this.plugoService.initializeChatSession().subscribe((resp) => {

      this.chatSession = resp['sessionId'];
      this.currentCommands = resp['commands'];
      this.conversations = resp['conversations'];
    });
  }

  getChildCommands(command: any) {
    this.plugoService.getChildCommands(this.chatSession, command.id).subscribe((resp: any) => {
      this.chatSession = resp['sessionId'];
      this.currentCommands = resp['commands'];
      this.conversations = [...this.conversations, ...resp['conversations']];
    });
  }
  reset() {
    this.ngOnInit();
    this.initializeChatSession();
  }



  changeMode() {
    this.encryptMode = this.encryptMode ? false : true;
    this.textToConvert = '';
  }

  convertText() {
    if (this.textToConvert.trim() === '' || this.password.trim() === '') {
      this.conversionOutput = 'Please fill the textboxes.';
      return;
    } else {
      if (this.encryptMode) {
        this.conversionOutput = CryptoJS.AES.encrypt(this.textToConvert.trim(), this.password.trim()).toString();
      } else {
        this.conversionOutput = CryptoJS.AES.decrypt(this.textToConvert.trim(), this.password.trim()).toString(CryptoJS.enc.Utf8);
      }
    }
    console.log(this.conversionOutput);
  }
}
