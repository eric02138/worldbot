import { Component, OnInit } from "@angular/core";
import { Router } from "../../../node_modules/@angular/router";

/**
 * This is the header component. It holds the iRobot brand logo
 */
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  isLogin = true;
  isCollapsed = true;

  //constructor(private router: Router) {}

  ngOnInit() {
    if (window.location.pathname.indexOf("login") === -1) {
      this.isLogin = false;
    }
  }

  /**
   * Logout method is not implemented. It just redirects you to login page. We're not using logout feature as of now.
   */
  //logOut() {
  //  this.router.navigate(["/login"]);
  //}
}