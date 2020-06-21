import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { CardView } from "nativescript-cardview";
import { registerElement } from "nativescript-angular/element-registry";
import { appendNote, editNote } from '../helpers/LocalStorage';
import { Note } from "~/classes/note";
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { ActivatedRoute } from "@angular/router";


registerElement("CardView", () => CardView);
@Component({
    selector: "EditNote",
    templateUrl: "./editNote.component.html",
    styleUrls: ['./editNote.component.css']
})
export class EditNoteComponent implements OnInit {
    _id: number;
    _title: string;
    _content: string;
    _isFavorite: boolean = false;
    constructor(private router: ActivatedRoute, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.router.queryParams.subscribe((params) => {
            const noteParam = JSON.parse(params.note);

            this._id = noteParam._id;
            this._title = noteParam._title;
            this._content = noteParam._content;
            this._isFavorite = noteParam._isFavorite;

        })
    }

    onEdit = (): void => {
        try {
            const note = new Note(
                this._title,
                this._content,
                this._isFavorite,
            );
            if (editNote(this._id, note)) {
                dialogs.action("Nota Editada com Sucesso", "", ['Ok']).then(() => {
                    this.routerExtensions.navigate(['myNotes'], {
                        transition: {
                            name: "fade"
                        }
                    });
                });
            } else {
                dialogs.action("Erro ao editar nota", "", ['Voltar']);
            }
        } catch (err) {
        }
    }
    toggleFavorite = () => {
        this._isFavorite = !this._isFavorite;
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
