function classHierarchy() {
    class Figure {
        constructor() {
            if (new.target === Figure) {
                throw new TypeError('Class is Abstract!')
            }
        }
        get area() {
            switch (this.constructor.name) {
                case 'Circle':
                    return Math.PI * this.radius * this.radius
                case 'Rectangle':
                    return this.width * this.height
            }
        }

        toString() {
            let props = Object.getOwnPropertyNames(this)
            console.log(props)
            props = props.map(p => p + ": " + this[p])
            console.log(props)
            return `${this.constructor.name} - ${props.join(", ")}`
        }
    }

    class Circle extends Figure {
        constructor(r) {
            super();
            this.radius = r
        }
    }

    class Rectangle extends Figure {
        constructor(w, h) {
            super()
            this.width = w
            this.height = h
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

console.log(classHierarchy())