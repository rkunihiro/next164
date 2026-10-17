"use client";

import { useState } from "react";

import type { Data } from "#/data/post.ts";

import { clickAction, formAction } from "./action.ts";

interface Props {
    data: Data;
}

export function Form({ data }: Props) {
    const [values, update] = useState<Data>(data);

    return (
        <form action={formAction}>
            <dl>
                <dt>Text 1</dt>
                <dd>
                    <input
                        name="text1"
                        type="text"
                        value={values.text1}
                        onChange={(e) => update((prev) => ({ ...prev, text1: e.target.value }))}
                    />
                </dd>
            </dl>
            <dl>
                <dt>Text 2</dt>
                <dd>
                    <input
                        name="text2"
                        type="text"
                        value={values.text2}
                        onChange={(e) => update((prev) => ({ ...prev, text2: e.target.value }))}
                    />
                </dd>
            </dl>
            <div>
                <button type="submit">Submit</button>
            </div>
            <div>
                <button type="button" onClick={() => clickAction(values)}>Click Me</button>
            </div>
        </form>
    );
}
