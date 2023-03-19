import { surpriseMePrompts } from "../constants";
import FileSaver from "file-saver";

export const getRandomPrompt = (prompt) => {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    if (surpriseMePrompts === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
};

export const downloadImage = async (_id, photo) => {
    FileSaver.saveAs(photo, `dowload-${_id}.jpg`);
};
