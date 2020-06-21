import { Component, OnInit, AfterViewInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "nativescript-cardview";
import { screen } from 'tns-core-modules/platform'
import { getAllNotes } from "~/app/helpers/LocalStorage";

registerElement("CardView", () => CardView);


@Component({
    selector: "MyNotes",
    templateUrl: "./myNotes.component.html",
    styleUrls: ['./myNotes.component.css']
})
export class MyNotesComponent implements OnInit {
    notes = [];
    screen = {
        height: screen.mainScreen.heightDIPs,
        width: screen.mainScreen.widthDIPs
    };
    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }
    ngOnInit(): void {
        this.notes = getAllNotes();
    }


    cardClick(note): void {
        this.routerExtensions.navigate(['readNote'], {
            queryParams: {
                note: JSON.stringify(note),
            },
            transition: {
                name: "fade"
            }
        });
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }
}
