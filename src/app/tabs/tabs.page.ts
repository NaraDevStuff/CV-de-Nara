import { ABOUT_ME_TEXT, CAREER_TEXT, PORTFOLIO_TEXT, SKILLS_TEXT } from './../classes/texts_english';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  public aboutMeText = ABOUT_ME_TEXT;
  public careerText = CAREER_TEXT;
  public skillsText = SKILLS_TEXT;
  public portfolioText = PORTFOLIO_TEXT;

  constructor() { }
}
