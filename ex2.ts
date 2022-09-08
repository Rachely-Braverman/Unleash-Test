interface INode {
    name: string;
    children: INode[];
}

const withoutRecursion = (node: INode): void => {
    if (!node) return

    const stack: INode[] = [node];
    while (stack.length > 0) {
        const current = stack.pop();
        console.log((current as INode).name);
        (current as INode).children?.forEach(child => stack.push(child))
    }

}

const withRecursion = (node: INode): void => {
    if (!node) return
    console.log(node.name)
    node.children?.forEach(child => {
        withRecursion(child)
    });

}

const node: INode =
{
    name: 'First Parent',
    children: []
}

withRecursion(node);
withoutRecursion(node);

export { }

/*
Why to use recursion:
Reduce the length of code, the code is simpler and shorter
Recursion adds clarity and (sometimes) reduces the time needed to write and debug code (but doesn't necessarily reduce space requirements or speed of execution).
Reduces time complexity.
Performs better in solving problems based on nested structures.
In this case the use of data structures (array) is saved.

why not to use recursion:
It is usually slower due to the overhead of maintaining the stack.
Requires lots of memory, it usually uses more memory for the stack and may overflow the stack.
*/