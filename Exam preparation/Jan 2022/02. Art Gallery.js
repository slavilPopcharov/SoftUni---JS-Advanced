class ArtGallery {
  constructor(creator) {
    this.creator = creator;
    this.possibleArticles = {
      picture: 200,
      photo: 50,
      item: 250,
    };
    this.listOfArticles = [];
    this.guests = [];
  }

  addArticle(articleModel, articleName, quantity) {
    if (
      articleModel.toLowerCase() !== "picture" &&
      articleModel.toLowerCase() !== "photo" &&
      articleModel.toLowerCase() !== "item"
    ) {
      throw new Error("This article model is not included in this gallery!");
    }

    let name = this.listOfArticles.find((a) => a.articleName == articleName);
    if(name == undefined){
      this.listOfArticles.push({
      articleModel: articleModel.toLowerCase(),
      articleName,
      quantity,
    });
    }

    let model = this.listOfArticles.find(
      (a) => a.articleModel == articleModel.toLowerCase()
    );
    if (name && model) {
      name.quantity += quantity;
    }

    return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
  } //1

  inviteGuest(guestName, personality) {
    let points = 0;
    if (personality === "Vip") {
      points = 500;
    } else if (personality === "Middle") {
      points = 250;
    } else {
      points = 50;
    }

    let invited = this.guests.find((g) => g.guestName == guestName);
    if (!invited) {
      this.guests.push({
        guestName,
        points,
        purchaseArticle: 0,
      });
    } else {
      throw new Error(`${guestName} has already been invited.`);
    }
    return `You have successfully invited ${guestName}!`;
  } //2

  buyArticle(articleModel, articleName, guestName) {
    let name = this.listOfArticles.find((a) => a.articleName == articleName);
    if (!name || name.articleModel !== articleModel) {
      throw new Error(`This article is not found.`);
    }
    if (name.quantity <= 0) {
      return `The ${articleName} is not available.`;
    }

    let guest = this.guests.find(g => g.guestName == guestName)
    if(!guest){
      return "This guest is not invited."
    }

    if (guest.points < this.possibleArticles[articleModel]){
      return "You need to more points to purchase the article."
    }

    guest.points -= this.possibleArticles[articleModel]
    guest.purchaseArticle ++
    name.quantity -=1

    return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`

  } //3

  showGalleryInfo(criteria) {

    if ( criteria === 'article'){
      let articleInfo = this.listOfArticles.map(i => `${i.articleModel} - ${i.articleName} - ${i.quantity}`)
      return[
      'Articles information:',
      articleInfo.join('\n')
      ].join('\n')
    }

    if (criteria === 'guest'){
      let guestInfo = (this.guests.map(i => `${i.guestName} - ${i.purchaseArticle}`)).join('\n')
      return [
        "Guests information:",
        guestInfo
      ].join('\n')
    }

  } //4
}





