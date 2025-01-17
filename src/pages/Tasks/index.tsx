import { Trash } from "lucide-react";
import { CreatedTaskCont, CreatedTaskContent } from "./style";

export function CreatedTaskContainer() {
    return (
        <CreatedTaskCont>
            <CreatedTaskContent>

            <input type="radio" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            <Trash />
            </CreatedTaskContent>
        </CreatedTaskCont>
    )
}