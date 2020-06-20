import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { Navigation } from "@angular/router";
import { getAllNotes } from "~/helpers/LocalStorage";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "nativescript-cardview";

registerElement("CardView", () => CardView);


@Component({
    selector: "MyNotes",
    templateUrl: "./myNotes.component.html",
    styleUrls: ['./myNotes.component.css']
})
export class MyNotesComponent implements OnInit {
    notes = [{
        id: 1,
        isFavorite: false,
        title: 'liszdhfg',
        content: 'sdfgihlssodfu',
        preview: 'skljdyflsalslsl'
    }];
    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // this.notes = getAllNotes();
        // Init your component properties here.
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
