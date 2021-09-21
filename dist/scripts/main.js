"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class ApiFetch {
    constructor() {
        this.baseUrl = "https://api.themoviedb.org/3/";
        this.apiKey = "d4bd55a4692da71940b8ab24f94031e2";
    }
    fetchGenres() {
        return __awaiter(this, void 0, void 0, function* () {
            const res = yield fetch(`${this.baseUrl}/genre/tv/list?api_key=${this.apiKey}`);
            if (res.status === 200) {
                const data = yield res.json();
                return data;
            }
            return { message: "no list" };
        });
    }
}
class Genre extends ApiFetch {
    constructor() {
        super();
        this.genreList = () => __awaiter(this, void 0, void 0, function* () {
            const list = yield this.fetchGenres();
            console.log(list);
        });
    }
}
const genre = new Genre();
genre.genreList();
//# sourceMappingURL=main.js.map