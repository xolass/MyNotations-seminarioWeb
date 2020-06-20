import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { ActivatedRoute } from "@angular/router";


@Component({
    selector: "ReadNote",
    templateUrl: "./readNote.component.html"
})
export class ReadNoteComponent implements OnInit {
    note;
    constructor(private routerExtensions: ActivatedRoute) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.routerExtensions.params.subscribe((params) => {
            this.note = params.note;
            console.log(params)
        })
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
