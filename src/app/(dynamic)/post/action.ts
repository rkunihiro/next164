"use server";

import { updateData, type Data } from "#/data/post.ts";

export async function formAction(formData: FormData) {
    console.log("post action", { formData });
    const text1 = formData.get("text1") as string;
    const text2 = formData.get("text2") as string;
    await updateData({ text1, text2 });
}

export async function clickAction(data: Data) {
    console.log("click action", { data });
    await updateData(data);
}
