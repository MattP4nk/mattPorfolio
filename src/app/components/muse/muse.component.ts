import { Component, OnInit } from '@angular/core';
import { Queue } from 'src/app/models/queue';
import { MuseService } from 'src/app/services/muse.service';

@Component({
  selector: 'app-muse',
  template: `
    <div class="container-fluid aside" id="aside" style="visibility: hidden;">
      <div class="row no-marg" style="width: 100%;height: 100%; padding: 1px;">
        <div class="col-10 no-pad no-marg" style="height:100%;">
          <form
            class="card no-marg"
            style="height: 100%; width: 100%; padding: 1vmax;"
          >
            <div
              class="card-body no-pad no-marg"
              style="height: 80%;width: 100%;"
            >
              <div class="roboto-chat" id="output"></div>
            </div>
            <div class="div" style="height:5%;"></div>
            <div
              class="card-header no-pad no-marg"
              style="height: 10%; width: 100%;"
            >
              <input
                class="form-control roboto-chat"
                (keyup.enter)="handler()"
                type="text"
                id="input"
                autocomplete="off"
                style="text-align: right; width: 100%;"
                spellcheck="false"
              />
            </div>
          </form>
        </div>
        <div
          class="col-2 card no-pad no-marg text-center"
          style="visibility: visible; height: 100%;"
        >
          <span id="span" style="height:80%;"></span>
          <div class="card-header no-pad no-marg">
            <img
              id="sign"
              class="img-fluid"
              style="background-color: black; min-width: 50px; min-height: 15px;"
              src="/assets/muse.png"
            />
          </div>
          <div class="card-body no-pad no-marg" style="width: 100%;">
            <img
              id="button"
              (click)="displayAssistant()"
              class="btn image rounded-circle muse"
              src="/assets/muse2.png"
              alt="info"
            />
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./muse.component.css'],
})
export class MuseComponent implements OnInit {
  constructor(private museService: MuseService) {}

  ngOnInit(): void {
    this.io['input'] = document.getElementById('input')! as HTMLInputElement;
    this.io['output'] = document.getElementById('output')!;
    this.io['aside'] = document.getElementById('aside')!;
    this.io['sign'] = document.getElementById('sign')!;
    this.io['button'] = document.getElementById('button')!;
  }

  //Muse Tools
  private printQueue: Queue = new Queue();
  private io: { [key: string]: any } = {};
  private user: string = 'Guest';
  private awake: boolean = false;
  private yesNo: boolean = false;
  private current_task: string = '';
  private key = 'key';

  handler() {
    let input = this.io['input'].value;
    this.io['input'].value = '';
    if (input == 'clear'){
      this.clearConsole()
      this.communication("muse_response", "**CLEAR**")
    }else if (input == 'cancel'){
      this.communication("muse_response", this.current_task + " canceled.")
      this.current_task = ""
    }else{
      if (input == '') {
        this.print(this.user + ': *ENTER* ', false);
      } else {
        this.print(this.user + ': ' + input, false);
        if (this.current_task != '') {
          this.communication('user_response', input);
        } else {
          this.communication('user_command', input);
        }
      }
    }
    
  }

  displayAssistant(): void {
    if (this.io['aside']!.style.visibility == 'hidden') {
      this.io['aside'].style.visibility = 'visible';
      this.io['output'].style.visibility = 'visible';
      this.io['input'].style.visibility = 'visible';
      document.getElementById('span')!.style.height = '10%';
      if (this.awake == false) {
        this.initialMessage();
        this.awake = true;
      }
    } else {
      this.io['aside'].style.visibility = 'hidden';
      this.io['output'].style.visibility = 'hidden';
      this.io['input'].style.visibility = 'hidden';
      document.getElementById('span')!.style.height = '80%';
    }
  }

  clearConsole(){
    this.io['output'].innerHTML = null
  }

  initialMessage(): void {
    this.communication(
      'muse_response',
      'Hi! This is the virtual assistant of this CV!\nYou can ask for more detailed information here!\nPlease tipe "help" for more info!'
    );
    this.io['sign'].src = '/assets/muse.png';
    this.io['button'].src = '/assets/muse2.png';
  }

  communication(head: string, message: string) {  
    /*if (this.yesNo) {
      //confirmation control for other functions.
      message = message.toLowerCase();
      if (message != 'yes' && message != 'no') {
        this.printList(
          'Sorry, "' +
            message +
            '" is a wrong answer!\nPlease just answer with: Yes//No.'
        );
        return;
      } else {
        this.yesNo = !this.yesNo;
      }
    }*/
    switch (head) {
      //handling assistant responses and solits
      case 'muse_response':
        if (message.search('Yes' && 'No') > 0) {
          this.yesNo = true;
        }
        this.printList(message);
        break;
      /*case 'muse_exit':
        this.current_task = '';
        break;*/
      //handling user cmds and responses
      case 'user_command':
        this.museService
          .museManager({ command: message, key: this.key })
          .subscribe((data) => {
            if (data.response.split(' ')[0] == 'Login') {
              this.printList(data.response.split('-')[0]);
              this.key = data.response.split('-')[1];
            } else {
              this.printList(data.response);
            }
            this.current_task = data.currentTask!;
          });
        break;
      case 'user_response':
        if (this.current_task.split('-').length > 1) {
          this.museService
            .museManager({
              command: this.current_task.split('-')[0],
              message: this.current_task.split('-')[1] + '-' + message,
              key: this.key,
            })
            .subscribe((data) => {
              if (data.response.split(' ')[0] == 'Login') {
                this.printList(data.response.split('-')[0]);
                this.key = data.response.split('-')[1];
              } else {
                this.printList(data.response);
              }
              this.current_task = data.currentTask!;
            });
        } else {
          this.museService
            .museManager({
              command: this.current_task!,
              message: message,
              key: this.key,
            })
            .subscribe((data) => {
              this.printList(data.response);
              this.current_task = data.currentTask!;
            });
        }
    }
  }

  async printList(aString: string) {
    this.printQueue.add(aString);
    do {
      let rawText: string = this.printQueue.next();
      this.print(rawText);
      await this.sleep(rawText.length * 40);
    } while (this.printQueue.isEmpty() == false);
  }

  async print(aString: string, typeWriting = true) {
    let space = this.io['output'];
    let output: HTMLParagraphElement = document.createElement('p');
    if (typeWriting == false) {
      output.setAttribute(
        'style',
        'background: #000000; color: 	darkseagreen; width: 95%; margin-bot: 10px; border-style: solid; border-radius: 1rem; padding: 5px;'
      );
    } else {
      output.setAttribute(
        'style',
        'background: #000000; color: 	rgba(231, 231, 231, 0.819); width: 95%; margin-bot: 10px; border-style: solid; border-radius: 1rem; padding: 5px;'
      );
    }
    let splitedText: string[] = aString.split('\n');
    let typing = '▓';
    for (var text of splitedText) {
      if (text.length >= 0) {
        var content = document.createTextNode('');
        output.appendChild(content);
        var newline = document.createElement('br');
        if (typeWriting) {
          typeWriter(0);
        } else {
          content.nodeValue = text;
        }
        output.appendChild(newline);
        this.io['output'].appendChild(output);
        await this.sleep(text.length * 40);
      }
    }

    function typeWriter(i: number) {
      content.nodeValue = text.substring(0, i) + typing;
      if (text.length >= i) {
        setTimeout(function () {
          typeWriter(i + 1);
        }, 30);
      } else {
        content.nodeValue = text;
      }
      scrollToBottom();
    }
    function scrollToBottom() {
      space.scrollTop = space.scrollHeight;
    }
  }

  sleep(ms: number) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
}
