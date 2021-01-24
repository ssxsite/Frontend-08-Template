/*BNF*/
<MultiplicativeExpression> ::= <Number> |
(<Number>) |
(<MultiplicativeExpression>) |
<MultiplicativeExpression> "*"<Number> |
<MultiplicativeExpression> "/" <Number> |

<AddtiveExpression> ::= <MultiplicativeExpression> |
(<MultiplicativeExpression>) |
<AddtiveExpression> "+" <MultiplicativeExpression>|
<AddtiveExpression> "-" <MultiplicativeExpression>|



