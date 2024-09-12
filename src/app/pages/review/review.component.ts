import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {
  carauselSelectedData: any;
  carauselData: any[] = [
      {
        index : 0,
        image: '../../../assets/projects/libraryOneV2/01.png',
        review: 'Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.',
        rating: 2.5,
        name: 'Simon Konecki',
        designation: 'Founder of Labar',
      },
      {
        index : 1,
        image: '../../../assets/projects/libraryOneV2/01.png',
        review: 'Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.',
        rating: 2.5,
        name: 'Simon Konecki',
        designation: 'Founder of Labar',
      },
      {
        index : 2,
        image: '../../../assets/projects/libraryOneV2/01.png',
        review: 'Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.',
        rating: 2.5,
        name: 'Simon Konecki',
        designation: 'Founder of Labar',
      },
      {
        index : 3,
        image: '../../../assets/projects/libraryOneV2/04.png',
        review: 'Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.',
        rating: 2.5,
        name: 'Simon Konecki',
        designation: 'Founder of Labar',
      },
      {
        index : 4,
        image: '../../../assets/projects/libraryOneV2/03.png',
        review: 'Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.',
        rating: 2.5,
        name: 'Simon Konecki',
        designation: 'Founder of Labar',
      },
      {
        index : 5,
        image: '../../../assets/projects/libraryOneV2/02.png',
        review: 'Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.',
        rating: 2.5,
        name: 'Simon Konecki',
        designation: 'Founder of Labar',
      },
      {
        index : 6,
        image: 'https://readymadeui.com/profile_5.webp',
        review: 'Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.',
        rating: 2.5,
        name: 'Simon Konecki',
        designation: 'Founder of Labar',
      }
    ];
    

  ngOnInit(): void {
    // Example data assignment
    this.carauselSelectedData = this.carauselData[0];
  }

  getFullStars(): number[] {
    return Array(Math.floor(this.carauselSelectedData?.rating)).fill(0);
  }

  getHalfStar(): boolean {
    return this.carauselSelectedData?.rating % 1 !== 0 && this.carauselSelectedData?.rating % 1 >= 0.5;
  }

  getEmptyStars(): number[] {
    const totalStars = 5;
    return Array(totalStars - Math.ceil(this.carauselSelectedData?.rating)).fill(0);
  }

  getData(data : string) {
    if(data == 'prev') {
      this.carauselSelectedData = this.carauselData[this.carauselData.indexOf(this.carauselSelectedData) - 1];
    } else {
      this.carauselSelectedData = this.carauselData[this.carauselData.indexOf(this.carauselSelectedData) + 1];
    }
  }

}
