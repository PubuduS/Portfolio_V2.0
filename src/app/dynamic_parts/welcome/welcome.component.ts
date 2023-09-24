import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mp-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit
{
  bannerImageSrc: string = "assets/images/banners/Spring_Banner.gif";

  ngOnInit(): void 
  {
    this.getSeasonalBanner();
  }
  
  getSeasonalBanner(): string
  {
    let month = 9;

    if( month <= 3 || month === 12 )
    {
      this.bannerImageSrc = "assets/images/banners/Winter_Banner.gif";
    }
    else if( month > 3 && month <= 8 )
    {
      this.bannerImageSrc = "assets/images/banners/Spring_Banner.gif";
    }
    else
    {
      this.bannerImageSrc = "assets/images/banners/Fall_Banner.gif";
    }

    return this.bannerImageSrc;
  }

}
