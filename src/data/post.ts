import "server-only";

import Database from "better-sqlite3";

export type Data = {
    text1: string;
    text2: string;
};

const db = new Database("data.db");

(function initialize() {
    db.exec(`
        CREATE TABLE IF NOT EXISTS posts (
            text1 TEXT,
            text2 TEXT
        )
    `);
    db.exec(`
        INSERT INTO posts
            (text1, text2)
        VALUES
            ('default1', 'default2')
    `);
})();

export async function fetchData(): Promise<Data> {
    return db.prepare<unknown[], Data>(`
        SELECT text1, text2
        FROM posts
        LIMIT 1
    `).get() ?? { text1: "", text2: "" };
}

export async function updateData(newData: Data): Promise<void> {
    db.prepare(`
        UPDATE posts
        SET text1 = :text1,
            text2 = :text2
    `).run({
        text1: newData.text1,
        text2: newData.text2,
    });
}
