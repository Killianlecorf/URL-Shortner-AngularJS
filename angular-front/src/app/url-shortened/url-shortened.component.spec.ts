import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlShortenedComponent } from './url-shortened.component';

describe('UrlShortenedComponent', () => {
  let component: UrlShortenedComponent;
  let fixture: ComponentFixture<UrlShortenedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrlShortenedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlShortenedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
