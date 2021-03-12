import { Component } from '@angular/core';
import Product from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'skoda';
  public car: string = "octavia";
  public Carcolor: string = "";
  public model: any = "";
  public variant: string = "";
  public location: string = "";
  clickevent: string = "";
  Name:string = "";
  textarea:any = "";
  txtArea:string="";
  selectedCourse: string = '';
  myprd:Product[]=[];
  myCountries:string="";
  constructor(){
    this.myprd=[{pid:1,prdname:"haircolor",cost:2330,type:this.checkoddeven(1)},
    {pid:2,prdname:"serum",cost:1000,type:this.checkoddeven(2)},
    {pid:3,prdname:"moisturiser",cost:178000,type:this.checkoddeven(3)},
    {pid:4,prdname:"night cream",cost:3000,type:this.checkoddeven(4)},
    {pid:5,prdname:"cleanser",cost:35000,type:this.checkoddeven(5)},
    
  ]
  }

  public handlecolor(c: any) {
    console.log(`Carcolor is ...${c.target.value}`)

  }
  public handlemodel(m: any) {
    console.log(`model is ...${m.target.value}`)

  }
  public handlevar(v: any) {
    v.target.value.slice(0,-1)
    console.log(`variant is ...${v.target.value}`)

  }
  locname(e: string) {
    this.clickevent = e;
    console.log('location....' + e);
  }
  student(e:any)
  {
    this.Name = e.value;
    console.log('value....'+this.Name);
  
  }
  studentint(m:any){
    this.textarea=m.value;
    console.log('value.....'+this.textarea);

  }
studentname(e:string)
{
  this.clickevent = e;
  console.log('student name....'+e);
  
}
studentit(m:string)
{
  this.clickevent=m;
  console.log('area of interest....'+m);
}
selectChangeHandler (event: any) {
  this.selectedCourse = event.target.value;
}
public handleaddprd(e:any){
console.log(JSON.stringify(e))
this.myprd.push(e);

}
displaySelectedDropDown(e:any)
{
  this.myCountries = e.target.value;
}
checkoddeven(check:number){
  return check %2==0?"even":"odd";
}
}
