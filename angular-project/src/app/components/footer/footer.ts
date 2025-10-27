import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../../services/user/auth-service';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';
import {ArticleService} from '../../services/article/article-service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {

  currentYear = new Date().getFullYear();
  appName = 'Articles';

  constructor(public authService: AuthService, private router: Router,
              private articleService: ArticleService) {}

  onClickLogout() {
    this.authService.logout();         // supprime le token et change l'état
    this.router.navigate(['/login']);  // redirige vers la page de login
  }

  onClickCreate(){

    this.articleService.save({title:"Les secrets des forêts tropicales", desc:"Un voyage au cœur de la biodiversité où chaque espèce joue un rôle essentiel.", author:"Camille Moreau", imgPath:"https://i-wdm.unimedias.fr/2025/07/08/shutterstock_2133821805-scaled-686d49074a283.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=501&ixlib=php-4.1.0&w=890"}).subscribe();
    this.articleService.save({title:"Le comportement fascinant des dauphins", desc:"Découvrez comment ces mammifères marins communiquent et coopèrent entre eux.", author:"Julien Caron", imgPath:"https://www.cetaces.org/wp-content/uploads/2009/07/Dauphin-bleu-et-blanc-Sc108060.jpg"}).subscribe();
    this.articleService.save({title:"La migration des oiseaux", desc:"Chaque année, des millions d’oiseaux traversent des milliers de kilomètres pour survivre.", author:"Sophie Bernard", imgPath:"https://i.notretemps.com/1200x0/smart/2025/04/02/oiseaux.jpeg"}).subscribe();
    this.articleService.save({title:"Les volcans les plus impressionnants du monde", desc:"De l’Etna au Kilauea, un tour d’horizon des géants de feu de notre planète.", author:"Lucas Dubois", imgPath:"https://www.echosciences-grenoble.fr/uploads/article/image/attachment/1005471322/xl_physique-impacts-volcans.jpg"}).subscribe();
    this.articleService.save({title:"Pourquoi les abeilles sont indispensables", desc:"Ces petits insectes assurent la pollinisation et l’équilibre des écosystèmes.", author:"Nina Lefèvre", imgPath:"https://www.mairie-baud.fr/wp-content/uploads/2017/06/LES-ABEILLES-2_700x470_acf_cropped.jpg"}).subscribe();
    this.articleService.save({title:"Les plantes carnivores expliquées", desc:"Comment ces plantes piègent et digèrent leurs proies pour survivre dans des milieux pauvres.", author:"Thomas Garnier", imgPath:"https://master.salamandre.org/media/21512/drosera-a-longues-feuilles-1600x1200.jpg"}).subscribe();
    this.articleService.save({title:"Les animaux du Grand Nord", desc:"Découvrez comment les ours polaires, phoques et renards arctiques affrontent le froid extrême.", author:"Marie Fontaine", imgPath:"https://lemagdesanimaux.ouest-france.fr/images/dossiers/2022-03/animaux-arctique-165624.jpg"}).subscribe();

    window.location.reload();



  }
}
