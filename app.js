//1.- Escribe una función que dados dos árboles binarios A y B, determine si son idénticos o no.

console.log('Ejercicio 4.1');

// Definición del nodo del árbol binario
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Función para determinar si dos árboles binarios son idénticos
function areIdentical(root1, root2) {
    // Si ambos nodos son null, son idénticos
    if (root1 === null && root2 === null) {
        return true;
    }

    // Si uno de los nodos es null y el otro no, no son idénticos
    if (root1 === null || root2 === null) {
        return false;
    }

    // Comparar el valor de los nodos y los subárboles izquierdo y derecho
    return (root1.value === root2.value) &&
           areIdentical(root1.left, root2.left) &&
           areIdentical(root1.right, root2.right);
}

// Ejemplo de uso
const rootA = new TreeNode(1);
rootA.left = new TreeNode(2);
rootA.right = new TreeNode(3);

const rootB = new TreeNode(1);
rootB.left = new TreeNode(2);
rootB.right = new TreeNode(3);

const rootC = new TreeNode(1);
rootC.left = new TreeNode(2);
rootC.right = new TreeNode(4);

console.log('Arbol binario A');
console.log(rootA);
console.log('Arbor binario B');
console.log(rootB);
console.log('Arbol binario C');
console.log(rootC);

console.log('Comparacion de arbol A y B');
console.log(areIdentical(rootA, rootB));


console.log('Comparacion de arbol A y C');
console.log(areIdentical(rootA, rootC));


//2.- Escribe una función que dado un árbol binario A, obtenga una copia B del mismo.

console.log('Ejercicio 4.2');

function cloneTree(node) {
    if (node === null) {
        return null;
    }

    // Crear un nuevo nodo con el mismo valor
    let newNode = new TreeNode(node.value);

    // Recursivamente copiar el subárbol izquierdo y derecho
    newNode.left = cloneTree(node.left);
    newNode.right = cloneTree(node.right);

    return newNode;
}

// Ejemplo de uso:
let root1 = new TreeNode(1);
root1.left = new TreeNode(2);
root1.right = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(5);

console.log('Arbol binario original');
console.log(root1);

let root2 = cloneTree(root1);

console.log('Arbol clonado');
console.log(root2);  // Imprime la copia del árbol A

//3.- Escribe una función que visualice los nodos que están en el nivel n de un árbol binario.

console.log('Ejercicio 4.3');

function printLevel(node, level) {
    if (node === null) {
        return;
    }

    if (level === 1) {
        console.log(node.value);
    } else if (level > 1) {
        printLevel(node.left, level - 1);
        printLevel(node.right, level - 1);
    }
}

// Función auxiliar para obtener la altura del árbol
function height(node) {
    if (node === null) {
        return 0;
    } else {
        let leftHeight = height(node.left);
        let rightHeight = height(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }
}

// Ejemplo de uso:
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log(`La altura del arbol es de ${height(root)} niveles`);

let level = 3;

console.log(`Los valores que se encuentran en el nivel ${level} son:`)
printLevel(root, level);  // Imprime los nodos en el nivel 3

//4.- Escribe una función que devuelva el número de hojas de un árbol binario.

console.log('Ejercicio 4.4');

function countLeaves(node) {
    if (node === null) {
        return 0;
    }

    // Si el nodo es una hoja (no tiene hijos), cuenta como una hoja
    if (node.left === null && node.right === null) {
        return 1;
    }

    // Si no es una hoja, contar las hojas en los subárboles izquierdo y derecho
    return countLeaves(node.left) + countLeaves(node.right);
}

console.log('El numero de hojas en los subarboles izquierdo y derecho son:')

console.log(countLeaves(root));  // Devuelve 4, ya que hay 4 hojas (4, 5, 6, 7)
