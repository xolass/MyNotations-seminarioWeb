import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "nativescript-cardview";
import { screen } from 'tns-core-modules/platform'
import { getAllNotes } from "~/app/helpers/LocalStorage";

registerElement("CardView", () => CardView);


@Component({
    selector: "Favorites",
    templateUrl: "./favorites.component.html",
    styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
    notes = [];
    screen = {
        height: screen.mainScreen.heightDIPs,
        width: screen.mainScreen.widthDIPs
    };
    console = console;
    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.notes = getAllNotes().filter(note => note._isFavorite);
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
