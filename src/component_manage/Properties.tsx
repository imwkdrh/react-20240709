import React, { ReactNode } from 'react';

// Properties (속성)
// - 부모 컴포넌트(호출부)에서 자식 컴포넌트로 데이터를 전달하기 위한 *객체
// - 부모 컴포넌트에서는 HTML과 동일한 방식으로(속성명=데이터)로 전달
// - 자식 컴포넌트에서는 함수의 매개변수 방식으로 속성 값을 받음
// - 전달할 수 있는 데이터는 변수에 담을 수 있는 모든 데이터 형태
// - 컴포넌트가 리렌더링되는 기준
// - Properties는 부모 -> 자식으로 데이터 전송 O / 자식 -> 부모로 데이터 전송 X

interface Props{
    sequence: number;
    title: string;
    subTitle: string;
    contents: string;
    child?: ReactNode;
}

function Child({ sequence,  title, subTitle, contents, child }: Props) {

    // const { title, subTitle, contents } = Props;
    return (
        <div>
            <h1>{sequence} {title}</h1>
            <h4>{subTitle}</h4>
            <p>{contents}</p>
            {child}
        </div>
    )
}

export default function Properties() {

    const article = {
        sequence: 1,
        title: '삼성전자 주가하락',
        subTitle: '삼성전자 CEO 이재용',
        contents: '삼성전자 주가 1,000만 won (100,000 USD) 하락하며, 1,000만 won (100,000 USD) 이상으로 상승하고있다.'
    };

    return (
        <div>
            <Child sequence={article.sequence} title={article.title} subTitle={article.subTitle} contents={article.contents} />
            <Child sequence={2}  title='머래니' subTitle='김대기 기자' contents='대기한다.' />
            <Child sequence={3} title='붉은사막 이대로 괜찮은가' subTitle='이재원 기자' contents='천만타이틀 가능?' />
            <Child {...article} child={<h1>hihihi</h1>} />

        </div>
    )
}
