---
title: 'Frontier talks: GPT-NL'
description: 'In this series, we provide indepth interviews with students, researchers and business.'
pubDate: 'July 15 2026'
heroImage: '../../assets/blog/interviews/gptnl.png'
---

### Saskia Lensink: Behind the Scenes of the Dutch LLM

Recent months, Saskia Lensink has been serving as Product Manager for [GPT-NL](https://gpt-nl.nl/). She's leading the project to a place where pivotal Dutch organizations are able to use a secure and sovereign alternative to China's or America's products. In this interview, she provides a good insight into the difficulties of positioning themselves within a public setting and the choices that this requires the makers of GPT-NL to make.

**Where does the project currently stand, and what are the biggest challenges toward the launch in autumn 2026?**

A year ago, we started pre-training, after a long period of data collection and preparation. That was completed in December, after which we began fine-tuning (instruction-tuning) GPT-NL.

At the moment, there are a total of 11 feasibility studies running with public and private partners. In practice, we are evaluating how well the model performs on tasks that are relevant to customers. These are often very specific tasks. A key question remains: when is GPT-NL “good enough,” and when is an answer sufficient? We need to define quality standards.

As a foundation model (pre-trained only), it is not very useful—you need to fine-tune it. There are many possibilities, and we are currently investigating what is needed to fine-tune as effectively as possible, what the limits are, and how much data is required. That is the phase we are in now—exciting and challenging.

Another major challenge is distribution. We have model weights that we can transfer to clients, but they may not be able to host the model themselves. SURF exists for the academic world and higher education, but TNO cannot simply offer a hosted version or API. We need to think about how to launch and make the model available, and this quickly becomes a complex problem.

**You briefly mentioned fine-tuning. Which fine-tuning techniques are you using, and what core tasks are you focusing on?**

We mainly use Q-LoRA and Reinforcement Learning (RL), which is of course an umbrella term for many methods. We are fine-tuning the model on three core tasks: simplification, summarization, and enabling it to function within a RAG context, for which a good embedding model is required. On top of that, we are fine-tuning further on client-specific data and tasks.

We encounter several data-related challenges here. The model does not yet perform well on simplification because we lack sufficient data containing examples of simplification. We also notice that the model struggles with reasoning. We want to generate multiple reasoning traces using synthetic datasets, but this raises the question of whether the associated rights are in order.

We are also experimenting with model sizes. We currently have a 27B model, but we may need a smaller 7B model that we lightly adjust using insights gained earlier. We are investigating what an optimal setup looks like and what is required for it. Fine-tuning itself is a substantial task and can quickly take many hours per run.

**How does the base model compare to current models, and where does it fall short?**

As mentioned, reasoning is difficult. We also did not include many examples for that in our pre-training dataset. What you include in pre-training can be improved through fine-tuning, but it helps if it is already present: RL is more or less constrained by the pre-training data. We are currently investigating this and conducting many ablation studies, which are extremely valuable. We are learning a lot about how we would approach pre-training differently next time.

Standard benchmarks also reflect this, although they are not necessarily representative of what customers want. But with 13.5 million euros, you cannot operate as a frontier lab, especially if you adhere to the law. The strength of GPT-NL therefore lies in fine-tuning for specific applications. The fact that the base model is still limited somewhat distracts from the discussion: the goal is to provide a sovereign alternative in contexts where organizations do not want to rely on American or Chinese providers.

**Collecting data seems to be a complex issue. How did you handle pre-training data and licenses (such as Wikipedia)?**

We only use open licenses, public domain data, and data for which the rightful owner has given permission. Wikipedia, for example, is not included by default. The Ministry of Economic Affairs required us to develop a business model and an exploitation strategy that would allow us to maintain ourselves and not require any more funds, so we chose to develop a model that has a paid professional license. This means that open-source data that disallows any commercial use could not be included. If part of the data has a non-commercial license, the share-alike clause prevents commercial use of the model. We wanted to avoid legal risks from the start, although other model builders approach this differently. In a future iteration, we will evaluate our approach and see where we may have been too strict for ourselves. Initially we wanted to be very careful and see what we can achieve while being fully compliant. There has been considerable discussion and insight on this since we went public.

In terms of bias, most of the data is still English, simply because there was not enough Dutch data volume available to train a full LLM. We do use a lot of GitHub data; its licensing is easy to verify, and it is useful for both volume and logical reasoning.

We may have underestimated the legal aspects at the beginning. Optimists thought it would be finished in three months, although pessimists expected it to take longer. For example, under AVG (GDPR) you would have to remove all names, but if the model does not even know who the King of the Netherlands is, it becomes unusable—it needs to understand the concept of proper names and addresses. Handling these kinds of risks is very difficult. Setting up contracts and protocols with data providers also takes a lot of time. It is much more than just the technical side; it is also highly legal.

**Why is TNO not allowed to host the model itself, and what are your ideas to extend the infrastructure?**

TNO exists to accelerate innovation and to give the market a push where there is market failure. If we were to commercially exploit a model and offer an API, we would become a model provider and take on a different role than intended. Additionally, we would become liable for all misuse of the model. That does not seem advisable, and it is questionable whether that responsibility belongs to TNO.

SURF has its own AI hub and a middleware layer where models will be offered, including GPT-NL. They have the infrastructure and experience, which makes it mutually beneficial.
If we look at independence from other countries, hosting providers and inference providers (compute) are key actors. You can build a model, but many organizations want to outsource maintenance and lack the infrastructure themselves. The default reflex is often to deploy on Azure or AWS. Companies like Oracle, IBM, Microsoft, and Meta were also among the first to approach us. We need to combine forces if we want to work on digital sovereignty with other European players; for example, there is now the Open Cloud alliance.

**There has been some criticism of the project. How do you see your position as a publicly funded organization? Can you offer anything compared to companies like Meta?**

That is true—we receive both criticism and praise, which is healthy. A common criticism is that we receive subsidies but do not open-source the model (“public money, public code”). We understand this well. One of the main reasons for this is our way of approaching fair renumeration of the organizations contributing data – we cannot purchase massive private datasets. One thing we can offer, is sharing in parts of the revenues of sales of professional licenses. This approach has resulted in an agreement with several rightsholders, among which the umbrella organization of Dutch news media companies, NDP. If there is interest, additional funding will also be needed, so external investors may become necessary—and for them, open-source is difficult.

We have also made agreements with umbrella organizations (such as the Institute for the Dutch Language). Some freelance authors have raised some concerns about the way their data can or cannot be used. This is handled case by case, and as GPT-NL we unfortunately cannot oversee all contractual arrangements that individual authors have made with different organizations. It is a valuable lesson for the future on how to improve ourselves. Does this approach work? Is this the best path? How can we improve it? You do not get everything right the first time.

Regarding performance, we chose not to publish intermediate benchmarks to avoid distraction. Large labs do the same. Internally at TNO, we did track everything extensively, and it is documented in internal reports. Some of this is also publicly available and was analyzed by Edwin Rijgersberg, who reviewed the December benchmarks. Edwin was nuanced and well-founded, but others immediately screamed the model was completely useless. This raises the question of whether withholding results is wise—perhaps it is better to be transparent about improvements.

**The public domain seems to be both a blessing and a curse. How does GPT-NL relate to broader European initiatives?**

There are multiple initiatives, such as the earlier Horizon Europe TrustLLM project (involving Scandinavian countries, the Netherlands, and Germany), which was ultimately not published due to concerns about rights and liability. More recent initiatives include OpenEuro-LLM and LLM EU. These are large consortia of 50 to 60 partners. Decision-making with so many participants leads to typical European fragmentation and slows down the progress. There is a complex web of EU subsidies and regulations. We see more strength in startups that can move quickly, such as Mistral, although they often involve American funding. We are somewhat cautious: TNO is involved in EU consortia, and the work is valuable, but it does reduce speed.
On the one hand, you want to scale, but not at the cost of speed. The whole discussion about a European model creates uncertainty, and people have strong opinions. You can feel the pressure from the US and China and wonder whether Europe still matters.

**What do you hope students and researchers will do with the model, and when will you consider it a success?**

If universities and researchers start working with it, I am especially interested in research on safety, cybersecurity, and bias. Universities can look much further ahead than market parties, which often focus only on the short term. Their fundamental research provides valuable feedback.

I would be most proud if we secure our first long-term contracts with end users who sign licensing agreements and truly benefit from the model. A hosted version would also be great, as well as securing funding to scale further.


