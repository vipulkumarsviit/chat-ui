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
    this.api.getRandomQuotes(Math.floor(Math.random() * 5) + 1).subscribe(
      data => {
        this.generate_message('Hi I can generate random quotes.', 'user');
        this.generate_message('Type anything in textbox I will return a quote.', 'user');
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

    this.api.getRandomQuotes(Math.floor(Math.random() * 5) + 1).subscribe(data => {
      this.generate_message(data['message'], 'user');
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
