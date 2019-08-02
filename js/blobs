function Blobs(options){
    this.count = options && options.count ? options.count : 10;
    this.animationTime = options && options.animationTime ? options.animationTime : 700;
    this.deltaTime = options && options.deltaTime ? options.deltaTime : 300;
    this.blobs = [];
    this.container = options && options.container ? document.querySelector(options.container) : document.querySelector('.blobs');

    this.random = function(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
    };

    this.objectSort = function(obj){
        return Object.keys(obj).sort().reduce(function (result, key) {
            result[key] = obj[key];
            return result;
        }, {});
    };

    this.dictionary = {
        '1': 'a',
        '11': 'b',
        '22': 'c',
        '2': 'd',
        '3': 'e',
        '4': 'f',
        '44': 'g',
        '33': 'h'
    };

    this.generateBlob = function(){
        var result = '',
            obj = {};
        for(var i = 1; i <= 4; i++){
            var rand = this.random(25, 75);
            obj[this.dictionary[i]] = rand;
            obj[this.dictionary[''+i+i]] = 100 - rand;
        }
        obj = this.objectSort(obj);
        for(var item in obj){
            result += obj[item]+'% ';
        }
        result = result.slice(0, result.length - 1);
        var resultPartOne = result.slice(0, result.length / 2),
            resultPartTwo = result.slice(result.length / 2, result.length);
        result = resultPartOne+ ' / '+resultPartTwo;
        return result;
    };

    this.generateBlobTime = function(){
        return this.random(this.animationTime - this.deltaTime, this.animationTime + this.deltaTime);
    }

    this.transformBlob = function(item, index){
        var time = this.blobs[index].time,
            self = this;
      !this.inited && setTimeout(function(){
          self.go(item, index, time);
          self.inited = true;
      }, 0);
        setTimeout(function(){
            self.go(item, index, time);
            self.transformBlob(item, index);
        }, time);
    };
  
  this.go = function(item, index, time){
    item.style.transition = 'all '+ time / 1000 +'s linear';
    item.style.left = this.random(30, 70)+'%';
    item.style.top = this.random(30, 70)+'%';
    item.style.borderRadius = this.generateBlob();
    this.blobs[index].time = this.generateBlobTime();
  }

    this.createBlob = function(index){
        var blob = document.createElement('div');
        blob.classList.add('blob');
        this.blobs.push({
            dom: blob,
            time: this.generateBlobTime(),
            index: index
        });
        return blob;
    };

    this.appendBlob = function(item){
        this.container.appendChild(item);
    }

    this.build = function(){
        if(!this.container) return false;
        for(var i = 0; i < this.count; i++){
            var blob = this.createBlob(i);
            this.appendBlob(blob);
            this.transformBlob(blob, i);
        }
    }

    this.init = function(){
        this.build();
    }

    this.init();
}

new Blobs({
  count: 10,
  animationTime: 4000,
  deltaTime: 1000
});
