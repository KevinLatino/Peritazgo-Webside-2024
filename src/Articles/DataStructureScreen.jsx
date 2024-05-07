import React from 'react'
import StructureData from '../Images/Estructura-de-datos.png'
import { CodeComponent } from '../Components/CodeComponent'
import { BackButton } from '../Components/BackButtonComponent'
import { Accordion } from '../Components/AccordionComponent'
import {
    Title,
    Space,
    Paragraph,
    Subtitle,
    GreenTitle,
    PurpleTitle,
    BlueTitle,
    RedTitle,
    Element
} from '../Components/PageTextsComponent';
import {
    BlueSection,
    BlueWordSection,
    GreenSection,
    GreenWordSection,
    PurpleSection,
    RedSection,
    RedWordSection,
    PurpleWordSection
} from '../Components/SectionsComponent'
import 'animate.css'

const DataStructure = () => {

    const stringVect =
        ` let animals = ['Dog', 'Cat', 'Lion', 'Bird'];
 console.log(animals[0]);
 //En consola se mostrará Dog que es el índice 0 `

    const stringMat =
        ` let animals = [
  ['Lion', 'Dog'],
  ['Elephant', 'Cat'],
 ];
 console.log(animals[1][0]);
 //En consola se mostrará Lion `

    const stringRec =
        `const animal = { name: 'Dockey Huntey', specie: 'Dog', age: 5 };
console.log(animal.especie)
//En consola se mostrará Perro`

    const stringRec2 =
        `const animal = { name: 'Chase', specie: 'Cat', age: 4 };
console.log(animal.especie)
//En consola se mostrará Cat`

    return (
        <>
            <div className='animate__animated animate__fadeInLeft'>
                <Title>
                    Datos
                </Title>
                <Paragraph>
                    Los datos pueden es una unidad, puede ser número, letras o simplemente
                    algún caracter, pero, al interpretar estos, se pueden convertir en información
                    sumamente importante
                </Paragraph>
                <Space />

                <Title>
                    Estructuras de datos
                </Title>
                <Paragraph>
                    Las estructuras de datos son todos aquellos mecanismos que permiten la organización de datos.
                    Permite hacer de deshacer datos
                </Paragraph>
                <Space />

                <Accordion title='Has click para ver la clasificación'>
                    <img src={StructureData} width={900} />
                </Accordion>

                <Space />

                <Title>
                    Estructuras de Datos Estáticas
                </Title>
                <Paragraph>
                    Una estructura de datos estática es aquella cuyo tamaño no puede cambiar en tiempo de ejecución.
                    Existen dos principales tipos de estructuras de datos estáticas: los arreglos y los registros.
                </Paragraph>
                <Space />

                <Title>
                    Arreglos
                </Title>
                <Paragraph>
                    Los arreglos son estructuras de datos estáticas que almacenan datos del mismo tipo.
                    Cada dato en un arreglo tiene un espacio asigando,
                    llamado índice, que empieza en 0, este espacio es en pocas palabras su posición.
                </Paragraph>

                <Space />

                <Subtitle>
                    Tipos:
                </Subtitle>

                <Space />

                <div className='flex gap-28'>
                    <GreenSection>
                        <GreenTitle>
                            ● Vector
                        </GreenTitle>
                        <Paragraph>
                            Un vector es una estructura de datos que almacena elementos en orden y se accede a
                            cada elemento usando un único índice. Es unidimensional
                        </Paragraph>
                        <Space />

                        <CodeComponent codeString={stringVect} />
                    </GreenSection>

                    <PurpleSection>
                        <PurpleTitle>
                            ● Matrices
                        </PurpleTitle>
                        <Paragraph>
                            Para acceder a un elemento en una matriz
                            se ocupan dos índices, un índice para la fila y otro índice para la columna.
                        </Paragraph>
                        <Space />

                        <CodeComponent codeString={stringMat} />
                    </PurpleSection>
                </div>

                <Space />

                <Title>
                    Registros
                </Title>
                <Paragraph>
                    Son estructuras de datos estáticas que almacenan datos de distintos tipos en un mismo bloque continuo de memoria. Cada dato en un registro tiene asignado un identificador único textual,
                    llamado llave.
                </Paragraph>

                <Space />

                <div className='flex gap-28'>
                    <BlueSection>
                        <BlueTitle>
                            Ejemplo:
                        </BlueTitle>
                        <Space />

                        <CodeComponent codeString={stringRec} />
                    </BlueSection>

                    <RedSection>
                        <RedTitle>
                            Otro ejemplo:
                        </RedTitle>
                        <Space />

                        <CodeComponent codeString={stringRec2} />
                    </RedSection>
                </div>

                <Space />

                <Title>
                    Estructuras de Datos Dinámicas
                </Title>
                <Paragraph>
                    Una estructura de datos dinámica es aquella cuyo tamaño puede cambiar. Se clasifican en lineales y no lineales. El principal protagonista es el nodo.
                    Están compuestas de varios nodos que apuntan entre sí.
                </Paragraph>

                <Space />

                <Title>
                    Nodos
                </Title>
                <Paragraph>
                    Es una estructura de datos tipo registro que es la unidad mínima un espacio para un puntero y uno para un dato. Posee:
                </Paragraph>

                <Space />

                <RedSection>
                    <RedTitle>
                        Caracteristicas:
                    </RedTitle>
                    <Element>
                        <RedWordSection>● Campo de datos</RedWordSection>: Guarda la información principal que queremos almacenar
                    </Element>
                    <Element>
                        <RedWordSection>● Campo de enlace o referencia</RedWordSection>: Almacena el siguiente nodo relacionado a un puntero
                    </Element>
                </RedSection>

                <Space />

                <Title>
                    Estructuras de Datos Dinámicas Lineales
                </Title>
                <Paragraph>
                    Son aquellas en las que los elementos ocupan lugares sucesivos en la estructura y cada uno de ellos tiene un único sucesor
                    y un único predecesor, es decir, sus elementos están ubicados uno al lado del otro relacionados en forma lineal.
                </Paragraph>

                <Space />

                <Title>
                    Listas enlazadas
                </Title>
                <Paragraph>
                    Las listas enlazadas, también conocidas como arreglos dinámicos, son estructuras de datos lineales que almacenan datos del mismo tipo. Se componen de nodos, cada uno con un campo de puntero que apunta al siguiente nodo en la secuencia, excepto el último nodo que apunta a una dirección nula.
                    Las listas enlazadas son fundamentales en la programación debido a su capacidad para gestionar datos de manera dinámica y eficiente.
                </Paragraph>

                <Space />

                    <Title>
                        Pilas o FIFO's y Colas o LIFO's
                    </Title>

                    <Space />

                    <div className='flex justify-evenly'>
                    <GreenSection>
                        <GreenTitle>
                            Pilas o FIFO's (First In First Out)
                        </GreenTitle>
                        <Paragraph>
                            Es un comportamiento específico de una lista enlazada
                        </Paragraph>
                        <Element>
                            <GreenWordSection>● Solo se pueden ingresar elementos al final</GreenWordSection>
                        </Element>
                        <Element>
                            <GreenWordSection>● Solo se pueden extraer elementos al final</GreenWordSection>
                        </Element>
                    </GreenSection>

                    <PurpleSection>
                        <PurpleTitle>
                            Colas o LIFO's (Last In First Out)
                        </PurpleTitle>
                        <Paragraph>
                            Es un comportamiento específico de una lista enlazada
                        </Paragraph>
                        <Element>
                            <PurpleWordSection>● Solo se pueden ingresar elementos al principio</PurpleWordSection>
                        </Element>
                        <Element>
                            <PurpleWordSection>● Solo se pueden extraer elementos al final</PurpleWordSection>
                        </Element>
                    </PurpleSection>
                </div>
                
                <Space />

                <Title>
                    Árboles binarios
                </Title>
                <Paragraph>
                    Los árboles son estructuras de datos dinámicas no lineales, d
                    onde cada nodo en la estructura tiene al menos dos campos para almacenar punteros a otros nodos en la estructura.
                    Existen 2 tipos. Árboles Binario: Cada nodo almacena dos punteros y Árboles N-arios: ada nodo almacena más de dos punteros
                </Paragraph>

                <Space />
2
                <Subtitle>
                    Métodos de ordenamiento de árboles:
                </Subtitle>

                <Space />

                <div className='flex justify-evenly'>
                    <BlueSection>
                        <BlueTitle>
                            Preorden: Raíz al inicio
                        </BlueTitle>
                        <Element>
                            <BlueWordSection>● Raíz</BlueWordSection>
                        </Element>
                        <Element>
                            <BlueWordSection>● Izquierda</BlueWordSection>
                        </Element>
                        <Element>
                            <BlueWordSection>● Derecha</BlueWordSection>
                        </Element>
                    </BlueSection>

                    <PurpleSection>
                        <PurpleTitle>
                            Enorden: Raíz al medio
                        </PurpleTitle>
                        <Element>
                            <PurpleWordSection>● Izquierda</PurpleWordSection>
                        </Element>
                        <Element>
                            <PurpleWordSection>● Raíz</PurpleWordSection>
                        </Element>
                        <Element>
                            <PurpleWordSection>● Derecha</PurpleWordSection>
                        </Element>
                    </PurpleSection>

                    <GreenSection>
                        <GreenTitle>
                            Posorden: Raíz al final.
                        </GreenTitle>
                        <Element>
                            <GreenWordSection>● Izquierda</GreenWordSection>
                        </Element>
                        <Element>
                            <GreenWordSection>● Derecha</GreenWordSection>
                        </Element>
                        <Element>
                            <GreenWordSection>● Raíz</GreenWordSection>
                        </Element>
                    </GreenSection>
                </div>

                <Space />

                <Title>
                    Grafos
                </Title>
                <Paragraph>
                    Los grafos son estructuras de datos dinámicas no lineales, donde cada nodo almacena una lista enlazadade punteros a otros nodes en la estructura. De esta manera,
                    los nodos de un grafo pueden tener una cantidad arbitraria de hijos, a diferencia de los árboles.
                </Paragraph>
            </div>
            <BackButton />
        </>
    )
}

export { DataStructure }
