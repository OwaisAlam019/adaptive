import { Component, OnInit } from '@angular/core';
import * as AdaptiveCards from "adaptivecards";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.renderAdaptive()
  }
  renderAdaptive(){
    let card = {
      "type": "AdaptiveCard",
      "version": "1.0",
      "body": [
          {
              "type": "Image",
              "url": "https://adaptivecards.io/content/adaptive-card-50.png"
          },
          {
              "type": "TextBlock",
              "text": "Hello **Adaptive Cards!**"
          }
      ],
      "actions": [
          {
              "type": "Action.OpenUrl",
              "title": "Learn more",
              "url": "https://adaptivecards.io"
          },
          {
              "type": "Action.OpenUrl",
              "title": "GitHub",
              "url": "https://github.com/Microsoft/AdaptiveCards"
          }
      ]
  };
  
  // Create an AdaptiveCard instance
  let adaptiveCard:any = new AdaptiveCards.AdaptiveCard();
  
  // Set its hostConfig property unless you want to use the default Host Config
  // Host Config defines the style and behavior of a card
  adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
      fontFamily: "Segoe UI, Helvetica Neue, sans-serif"
      // More host config options
  });
  
  // Set the adaptive card's event handlers. onExecuteAction is invoked
  // whenever an action is clicked in the card
  adaptiveCard.onExecuteAction = function(action:any) { alert("Ow!"); }
  
  // Parse the card payload
  adaptiveCard.parse(card);
  
  // Render the card to an HTML element:
  let renderedCard:any = adaptiveCard.render();
  
  // And finally insert it somewhere in your page:
  document.getElementById("content")?.appendChild(renderedCard)
  // document.body.appendChild(renderedCard);
  adaptiveCard.onProcessMarkdown = function(text:any, result:any) {
    result.outputHtml = "<your Markdown processing logic>";
    result.didProcess = true;
  }
  }

}
