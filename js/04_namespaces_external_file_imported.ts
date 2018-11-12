namespace myMath2 {
    export function testImport(str:string) {
        return (`import works! (${str})`);
    }
    export namespace subNamespace {
        export function testsubNamespace(str:string) {
            return (`subNamespace works! (${str})`);
        }
    }
}