const getTemplate = (data = [], name, selectedId) => {
  console.log(selectedId)
  const items = data.map(item => {
    let select = '';
    if (item.id === selectedId) {
      select = 'selected'
    }
    return `<li class="select__item ${select}" data-type="item" data-id="${item.id}">${item.value}</li>`
  });

  return `
      <div class="select__backdrop" data-type="backdrop"></div>
      <div class="select__input" data-type="input">
        <span data-type="name">--${name}--</span>
        <i class="fa fa-caret-down" data-type="arrow" aria-hidden="true"></i>
      </div>
      <div class="select__dropdown" data-type="dropdown">
        <ul class="select__list">
          ${items.join('')}
        </ul>
      </div>
  `
}


export class Select {
  constructor(select, options) {
    this.$el = document.querySelector(select);
    this.options = options;
    this.selectedId = options.selectedId;
    this.#render();
    this.#setup();
  }

  open() {
    this.$el.classList.add('open');
    this.$arrow.classList.remove('fa-caret-down');
    this.$arrow.classList.add('fa-caret-up');
  }

  close() {
    this.$el.classList.remove('open');
    this.$arrow.classList.add('fa-caret-down');
    this.$arrow.classList.remove('fa-caret-up');
  }

  #render() {
    const {data, name} = this.options;
    return this.$el.innerHTML = getTemplate(data, name, this.selectedId);

  }

  #setup() {
    this.clickHandler = this.clickHandler.bind(this);
    this.$el.addEventListener('click', this.clickHandler);
    this.$arrow = this.$el.querySelector('[data-type="arrow"]');
    this.$name = this.$el.querySelector('[data-type="name"]');
  }

  clickHandler(event) {
    const {type} = event.target.dataset;
    if (type === 'input' || type === 'arrow' || type === 'name') {
      this.toggle()
    } else if (type === 'item') {
      let id = event.target.dataset.id;
      this.select(id);
    }

  }

  get isOpen() {
    return this.$el.classList.contains('open');
  }

  get current() {
    return this.options.data.find(item => item.id === +this.selectedId);
  }

  select(id) {
    this.selectedId = id;
    this.$name.textContent = this.current.value;

    this.$el.querySelectorAll('[data-type="item"]').forEach(item => {
        item.classList.remove('selected')
      });
    this.$el.querySelector(`[data-id="${id}"]`).classList.add('selected');
    this.close();
  }

  toggle() {
    this.isOpen ? this.close() : this.open()
  }


}