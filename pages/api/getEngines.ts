// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest,NextApiResponse } from "next";
// import openai from"../../lib/gpt";

// type Option={
//     value: string;
//     label: string;
// };

// type Data ={
//     modelOption: Option[];
// };

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ){
//     const models = await openai.listModels().then((res) => res.data.data);

//     const modelOptions = models.map((model) => ({
//         value: model.id,
//         lable: model.id,
//     }));

//    res.status(200).json({
//     modelOption: modelOptions,
//    });
// }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import openai from "../../lib/gpt";

type Option = {
  value: string;
  label: string;
};

type Data = {
  modelOption: Option[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const models = await openai.listModels().then((res) => res.data.data);

  const modelOptions = models.map((model) => ({
    value: model.id,
    label: model.id,
  }));

  res.status(200).json({
    modelOption: modelOptions, // Update the property name to match the type definition
  });
}
