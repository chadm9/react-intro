/**
 * Created by mephisto on 6/27/17.
 */

class Triangle{
    constructor(A, B, C){
        this.A = A;
        this.B = B;
        this.C = C;
    }

    getPerimeter(){
        return (this.A + this.B + this.C)
    }

    getArea(){
        var p = this.getPerimeter()/2.0;
        return Math.sqrt(p*(p - this.A)*(p - this.B)*(p - this.C))
    }
}

class EqTriangle extends Triangle{
    constructor(A){
        super(A, A, A)
    }

    getArea(){
        return Math.sqrt(3)/4.0*(Math.pow(this.A,2))
    }
}

var triangle = new EqTriangle(3);
console.log(triangle.getArea());
