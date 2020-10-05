import { Component, OnInit } from '@angular/core';
import { PlugoService } from '../plugo.service';
@Component({
  selector: 'app-scs-chat',
  templateUrl: './scs-chat.component.html',
  styleUrls: ['./scs-chat.component.css']
})
export class ScsChatComponent implements OnInit {

  scale = false;
  disabled = false;
  query = '';
  chatLogs = [];

  constructor(private api: PlugoService) {
  }

  ngOnInit() {

  }

  onOpenChatWindow() {
    this.chatLogs = [];
    this.api.getAnswer('Who is batman').subscribe(
      resp => {
        this.generate_message('Hi, I am Sakhi', 'user');
        this.generate_message('I can respond to few basic question', 'user');
        this.toggleScale();
      },
      error => {
        this.generate_message('Make sure Chat API is up and running', 'user');
        this.disabled = true;
        this.toggleScale();
      });

  }
  toggleScale() {
    this.scale = !this.scale;
  }

  onSendMEssage(e) {
    e.preventDefault();
    this.processUserQuery();
  }
  processUserQuery() {
    const msg = this.query;
    if (msg.trim() === '') {
      return false;
    }

    this.generate_message(msg, 'self');

    this.api.getAnswer(msg).subscribe(resp => {
      if (resp && resp['answer']) {
        this.generate_message(resp['answer'], 'user');
      } else {
        this.generate_message('I didn\'t understand that.', 'user');
      }
    },
      error => {
        this.generate_message('Something went wrong with API', 'user');
      });
  }

  generate_message(msg, type) {
    this.chatLogs.push({ msg, type });
    if (type === 'self') {
      this.query = '';
    }
    // $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
  }
  onChange(e) {
    e.preventDefault();
    if (e.keyCode === 13) {
      this.processUserQuery();
    }
    return false;
  }
}
