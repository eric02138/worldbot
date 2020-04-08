import { Component, OnInit, Renderer2, Inject } from "@angular/core";
import { DOCUMENT } from "../../../node_modules/@angular/platform-browser";
import { environment } from "../../environments/environment";

/**
 * This is the footer component. This holds a javascript tag which is used to collect feedback from the users.
 */
@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  env = environment;

  constructor(
  //  private _renderer2: Renderer2,
  //  @Inject(DOCUMENT) private _document
  ) {}

  ngOnInit() {
    //const s = this._renderer2.createElement("script");
    //s.type = `text/javascript`;
    // tslint:disable-next-line:max-line-length
    /*
    s.src = "https://irobot.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/5f3a62/b/21/a44af77267a987a660377e5c46e0fb64/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=0cf95c00";
    this._renderer2.appendChild(this._document.body, s);
    */
  }
}