
export class Item{
    constructor(id, name, price, image){
        this.is=id;
        this.name=name;
        this.price=price;
        this.image=image;
    }
    show() {
        let temp = "";
        temp += "<p>ID: " + this.id + "</p>";
        temp += "<p>Name: " + this.name + "</p>";
        temp += "<p>Price: " + this.price + "</p>";
        temp += "<img src=" + this.image + " />";
        return temp;
    }
}

const clownWig=new Item(0, "Clown WIg", 15, "https://www.thecostumeshop.ie/images/detailed/25/crazy_clown_wig_1.jpg" );
const Chicken=new Item(1, "Screaming Chicken", 7, "https://i5.walmartimages.com/asr/3e6983b1-4466-4eb2-8f49-b579c83f9bed_1.335c02515b701a9114223048b5d396e4.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff" );
const Fart=new Item(2, "Fart Baloon", 12, "https://i3.cpcache.com/merchandise/656_300x300_Front_Color-Silver.jpg?Size=NA&AttributeValue=NA&c=True&region={%22name%22:%22FrontCenter%22,%22width%22:10.5,%22height%22:10.5,%22alignment%22:%22MiddleCenter%22,%22orientation%22:0,%22dpi%22:100,%22crop_x%22:0,%22crop_y%22:0,%22crop_h%22:1000,%22crop_w%22:1000,%22scale%22:0,%22template%22:{%22id%22:77059052,%22params%22:{}}}&Filters=[{%22name%22:%22background%22,%22value%22:%22ddddde%22,%22sequence%22:2}]" );

export const itemsList=[clownWig, Chicken,Fart];
