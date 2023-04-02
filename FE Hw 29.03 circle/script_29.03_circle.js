//Создайте класс Circle, который рендерит окружность в двумерной плоскости. Класс должен иметь следующие свойства и методы:
// x и y: Координаты x и y центра окружности (плавающие значения).
// радиус: Радиус окружности (float).
// color: Цвет окружности (строка).

// Конструктор: Инициализирует свойства (x, y, радиус и цвет) значениями по умолчанию (0, 0, 1 и "черный").
// area(): Вычисляет и возвращает площадь круга.
// render(ctx): Рендеринг окружности на холсте с использованием заданного контекста 2D-рендеринга.

const canvas = document.querySelector("#myCanvas");

canvas.width = 500;
canvas.height = 500;

let ctx = canvas.getContext("2d");

class Circle {
    constructor(x = 0, y = 0, radius = 1, color = "black") {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    area() {
        const areaCircle = Math.PI * (this.radius ** 2);
        return areaCircle;
    }
    render(ctx) {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    colorFill(ctx) {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.7;
        ctx.fill();
    }
    
    gradient(ctx) {
        var gradient = ctx.createLinearGradient(250, 0, 250, 300);
        gradient.addColorStop(0, "magenta");
        gradient.addColorStop(1, "yellow");

        ctx.fillStyle = gradient;
        ctx.fill();
    
    }
    shadow(ctx) {
        ctx.fillStyle = this.color;
        ctx.shadowColor = "orange";
        ctx.shadowBlur = 30;
        ctx.shadowOffsetX = 30;
        ctx.shadowOffsetY = 30;
  
    }
}

const firstCircle = new Circle(250, 100, 100, "red");
firstCircle.render(ctx);
console.log(firstCircle.area());
firstCircle.gradient(ctx)

const secondCircle = new Circle(180, 250, 85, "blue");
secondCircle.render(ctx);
console.log(secondCircle.area());
secondCircle.colorFill(ctx);
secondCircle.shadow(ctx)

const thirdCircle = new Circle(300, 280, 70, "yellow");
thirdCircle.render(ctx);
console.log(thirdCircle.area());
thirdCircle.colorFill(ctx);





