<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Exponential][exponential-distribution] distribution [quantile function][quantile-function].

<section class="intro">

The [quantile function][quantile-function] for an [exponential][exponential-distribution] random variable is

<!-- <equation class="equation" label="eq:exponential_quantile_function" align="center" raw="Q(p;\lambda) = \frac{-\ln(1-p)}{\lambda}" alt="Quantile function for an exponential distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;\lambda) = \frac{-\ln(1-p)}{\lambda}" data-equation="eq:exponential_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/exponential/quantile/docs/img/equation_exponential_quantile_function.svg" alt="Quantile function for an exponential distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p <= 1`, where `λ` is the rate parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-exponential-quantile
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var quantile = require( '@stdlib/stats-base-dists-exponential-quantile' );
```

#### quantile( p, lambda )

Evaluates the [quantile function][quantile-function] for a [exponential][exponential-distribution] distribution with rate parameter `lambda`.

```javascript
var y = quantile( 0.5, 0.1 );
// returns ~6.931

y = quantile( 0.2, 4.0 );
// returns ~0.056
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( 1.9, 1.0 );
// returns NaN

y = quantile( -0.1, 1.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0 );
// returns NaN

y = quantile( 0.0, NaN );
// returns NaN
```

If provided `lambda < 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.4, -1.0 );
// returns NaN
```

#### quantile.factory( lambda )

Returns a function for evaluating the [quantile function][quantile-function] of an [exponential][exponential-distribution] distribution with rate parameter `lambda`.

```javascript
var myquantile = quantile.factory( 4.0 );

var y = myquantile( 0.2 );
// returns ~0.056

y = myquantile( 0.9 );
// returns ~0.576
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var quantile = require( '@stdlib/stats-base-dists-exponential-quantile' );

var lambda;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    lambda = randu() * 10.0;
    y = quantile( p, lambda );
    console.log( 'p: %d, λ: %d, Q(p;λ): %d', p.toFixed( 4 ), lambda.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-exponential-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-exponential-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-exponential-quantile/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-exponential-quantile/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-exponential-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-exponential-quantile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-exponential-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-exponential-quantile/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-exponential-quantile/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-exponential-quantile/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-exponential-quantile/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-exponential-quantile/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-exponential-quantile/main/LICENSE

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

</section>

<!-- /.links -->
