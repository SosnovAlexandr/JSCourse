class options {
	constructor(height, width, bg, fontSize, textAlign){
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createDiv(){
		let d = document.createElement('div');
		d.innerHTML = prompt ('Введите какой-нибудь текст', '');
  d.style.height = this.height;
  d.style.width = this.width;
  d.style.background = this.bg;
  d.style.fontSize = this.fontSize;
  d.style.textAlign = this.textAlign;
		document.body.insertBefore(d, document.body.firstChild);
		return d.style.background;
	}
}

const div = new options('250px', '500px', '#b3b3b3', '50px', 'center');
console.log(div.createDiv());


