const SqNumPlaceholder = "{sq}";
const HDivColorPlaceholder = "{color}";
const DivIDPlaceHolder = "{id}";

const DefaultHighlightedSquareDiv = '<div id="${DivIDPlaceHolder}" class="highlight square-${SqNumPlaceholder}" data-test-element="highlight"  style="background-color: ${HDivColorPlaceholder}; opacity: 0.8;"></div>';

export {
    DefaultHighlightedSquareDiv, 
    SqNumPlaceholder,
    DivIDPlaceHolder,
    HDivColorPlaceholder
};