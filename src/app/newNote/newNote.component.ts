import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { CardView } from "nativescript-cardview";
import { registerElement } from "nativescript-angular/element-registry";
import { appendNote } from '../helpers/LocalStorage';
import { Note } from "~/classes/note";
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";


registerElement("CardView", () => CardView);
@Component({
    selector: "NewNote",
    templateUrl: "./newNote.component.html",
    styleUrls: ['./newNote.component.css']
})
export class NewNoteComponent implements OnInit {
    title: string;
    content: string;
    isFavorite: boolean = false;
    constructor(private router: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onCreate = (): void => {
        try {
            const note = new Note(
                this.title,
                this.content,
                this.isFavorite,
            );
            console.log({ note: JSON.stringify(note) })
            if (appendNote(note)) {
                dialogs.action("Nota Criada com Sucesso", "", ['Ok']).then(() => {
                    this.router.navigate(['myNotes'], {
                        transition: {
                            name: "fade"
                        }
                    });
                });
            } else {
                dialogs.action("Erro ao criar nota", "", ['Voltar']);
            }
        } catch (err) {
        }
    }
    toggleFavorite = () => {
        this.isFavorite = !this.isFavorite;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
