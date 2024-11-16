import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import TaroCard from "../Components/TaroCard";
import Carousel from "../Components/Carousel";

const cast = {
  title: "Какой-то расклад",
  metrics: "Метрики",
  summary: "Тута какая-та сводка по таро"
};

const CandidatesTaro = () => {
  const navigate = useNavigate();
  const { teamId } = useParams();

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  const [data, setData] = useState([]);

  const fetchTaroSequence = async () => {
    // const response = await fetch.get("/taro/sequence", {
    //   candidateId: userId,
    //   teamId,
    //   length: 4
    // });
    setData([
      {
        type: "major",
        nameShort: "ar01",
        name: "The Magician",
        value: "1",
        valueInt: 1,
        meaningUp:
          "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.",
        meaningRev: "Physician, Magus, mental disease, disgrace, disquiet.",
        desc: 'A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician\'s right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change "unto the Ogdoad." The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ.'
      },
      {
        type: "major",
        nameShort: "ar02",
        name: "The High Priestess",
        value: "2",
        valueInt: 2,
        meaningUp:
          "Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.",
        meaningRev: "Passion, moral or physical ardour, conceit, surface knowledge.",
        desc: "She has the lunar crescent at her feet, a horned diadem on her head, with a globe in the middle place, and a large solar cross on her breast. The scroll in her hands is inscribed with the word Tora, signifying the Greater Law, the Secret Law and the second sense of the Word. It is partly covered by her mantle, to shew that some things are implied and some spoken. She is seated between the white and black pillars--J. and B.--of the mystic Temple, and the veil of the Temple is behind her: it is embroidered with palms and pomegranates. The vestments are flowing and gauzy, and the mantle suggests light--a shimmering radiance. She has been called occult Science on the threshold of the Sanctuary of Isis, but she is really the Secret Church, the House which is of God and man. She represents also the Second Marriage of the Prince who is no longer of this world; she is the spiritual Bride and Mother, the daughter of the stars and the Higher Garden of Eden. She is, in fine, the Queen of the borrowed light, but this is the light of all. She is the Moon nourished by the milk of the Supernal Mother.\nIn a manner, she is also the Supernal Mother herself--that is to say, she is the bright reflection. It is in this sense of reflection that her truest and highest name in bolism is Shekinah--the co-habiting glory. According to Kabalism, there is a Shekinah both above and below. In the superior world it is called Binah, the Supernal Understanding which reflects to the emanations that are beneath. In the lower world it is MaIkuth--that world being, for this purpose, understood as a blessed Kingdom that with which it is made blessed being the Indwelling Glory. Mystically speaking, the Shekinah is the Spiritual Bride of the just man, and when he reads the Law she gives the Divine meaning. There are some respects in which this card is the highest and holiest of the Greater Arcana."
      },
      {
        type: "major",
        nameShort: "ar03",
        name: "The Empress",
        value: "3",
        valueInt: 3,
        meaningUp:
          "Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.",
        meaningRev:
          "Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.",
        desc: "A stately figure, seated, having rich vestments and royal aspect, as of a daughter of heaven and earth. Her diadem is of twelve stars, gathered in a cluster. The symbol of Venus is on the shield which rests near her. A field of corn is ripening in front of her, and beyond there is a fall of water. The sceptre which she bears is surmounted by the globe of this world. She is the inferior Garden of Eden, the Earthly Paradise, all that is symbolized by the visible house of man. She is not Regina coeli, but she is still refugium peccatorum, the fruitful mother of thousands. There are also certain aspects in which she has been correctly described as desire and the wings thereof, as the woman clothed with the sun, as Gloria Mundi and the veil of the Sanctum Sanctorum; but she is not, I may add, the soul that has attained wings, unless all the symbolism is counted up another and unusual way. She is above all things universal fecundity and the outer sense of the Word. This is obvious, because there is no direct message which has been given to man like that which is borne by woman; but she does not herself carry its interpretation.\nIn another order of ideas, the card of the Empress signifies the door or gate by which an entrance is obtained into this life, as into the Garden of Venus; and then the way which leads out therefrom, into that which is beyond, is the secret known to the High Priestess: it is communicated by her to the elect. Most old attributions of this card are completely wrong on the symbolism--as, for example, its identification with the Word, Divine Nature, the Triad, and so forth."
      },
      {
        type: "major",
        nameShort: "ar04",
        name: "The Emperor",
        value: "4",
        valueInt: 4,
        meaningUp:
          "Stability, power, protection, realization; a great person; aid, reason, conviction; also authority and will.",
        meaningRev:
          "Benevolence, compassion, credit; also confusion to enemies, obstruction, immaturity.",
        desc: 'He has a form of the Crux ansata for his sceptre and a globe in his left hand. He is a crowned monarch--commanding, stately, seated on a throne, the arms of which axe fronted by rams\' heads. He is executive and realization, the power of this world, here clothed with the highest of its natural attributes. He is occasionally represented as seated on a cubic stone, which, however, confuses some of the issues. He is the virile power, to which the Empress responds, and in this sense is he who seeks to remove the Veil of Isis; yet she remains virgo intacta.\nIt should be understood that this card and that of the Empress do not precisely represent the condition of married life, though this state is implied. On the surface, as I have indicated, they stand for mundane royalty, uplifted on the seats of the mighty; but above this there is the suggestion of another presence. They signify also--and the male figure especially--the higher kingship, occupying the intellectual throne. Hereof is the lordship of thought rather than of the animal world. Both personalities, after their own manner, are "full of strange experience," but theirs is not consciously the wisdom which draws from a higher world. The Emperor has been described as (a) will in its embodied form, but this is only one of its applications, and (b) as an expression of virtualities contained in the Absolute Being--but this is fantasy.'
      },
      {
        type: "major",
        nameShort: "ar05",
        name: "The Hierophant",
        value: "5",
        valueInt: 5,
        meaningUp:
          "Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.",
        meaningRev: "Society, good understanding, concord, overkindness, weakness.",
        desc: "He wears the triple crown and is seated between two pillars, but they are not those of the Temple which is guarded by the High Priestess. In his left hand he holds a sceptre terminating in the triple cross, and with his right hand he gives the well-known ecclesiastical sign which is called that of esotericism, distinguishing between the manifest and concealed part of doctrine. It is noticeable in this connexion that the High Priestess makes no sign. At his feet are the crossed keys, and two priestly ministers in albs kneel before him. He has been usually called the Pope, which is a particular application of the more general office that he symbolizes. He is the ruling power of external religion, as the High Priestess is the prevailing genius of the esoteric, withdrawn power. The proper meanings of this card have suffered woeful admixture from nearly all hands. Grand Orient says truly that the Hierophant is the power of the keys, exoteric orthodox doctrine, and the outer side of the life which leads to the doctrine; but he is certainly not the prince of occult doctrine, as another commentator has suggested.\nHe is rather the summa totius theologiæ, when it has passed into the utmost rigidity of expression; but he symbolizes also all things that are righteous and sacred on the manifest side. As such, he is the channel of grace belonging to the world of institution as distinct from that of Nature, and he is the leader of salvation for the human race at large. He is the order and the head of the recognized hierarchy, which is the reflection of another and greater hierarchic order; but it may so happen that the pontiff forgets the significance of this his symbolic state and acts as if he contained within his proper measures all that his sign signifies or his symbol seeks to shew forth. He is not, as it has been thought, philosophy-except on the theological side; he is not inspiration; and he is not religion, although he is a mode of its expression."
      },
      {
        type: "major",
        nameShort: "ar06",
        name: "The Lovers",
        value: "6",
        valueInt: 6,
        meaningUp: "Attraction, love, beauty, trials overcome.",
        meaningRev:
          "Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.",
        desc: "The sun shines in the zenith, and beneath is a great winged figure with arms extended, pouring down influences. In the foreground are two human figures, male and female, unveiled before each other, as if Adam and Eve when they first occupied the paradise of the earthly body. Behind the man is the Tree of Life, bearing twelve fruits, and the Tree of the Knowledge of Good and Evil is behind the woman; the serpent is twining round it. The figures suggest youth, virginity, innocence and love before it is contaminated by gross material desire. This is in all simplicity the card of human love, here exhibited as part of the way, the truth and the life. It replaces, by recourse to first principles, the old card of marriage, which I have described previously, and the later follies which depicted man between vice and virtue. In a very high sense, the card is a mystery of the Covenant and Sabbath.\nThe suggestion in respect of the woman is that she signifies that attraction towards the sensitive life which carries within it the idea of the Fall of Man, but she is rather the working of a Secret Law of Providence than a willing and conscious temptress. It is through her imputed lapse that man shall arise ultimately, and only by her can he complete himself. The card is therefore in its way another intimation concerning the great mystery of womanhood. The old meanings fall to pieces of necessity with the old pictures, but even as interpretations of the latter, some of them were of the order of commonplace and others were false in symbolism."
      },
      {
        type: "major",
        nameShort: "ar07",
        name: "The Chariot",
        value: "7",
        valueInt: 7,
        meaningUp: "Succour, providence also war, triumph, presumption, vengeance, trouble.",
        meaningRev: "Riot, quarrel, dispute, litigation, defeat.",
        desc: "An erect and princely figure carrying a drawn sword and corresponding, broadly speaking, to the traditional description which I have given in the first part. On the shoulders of the victorious hero are supposed to be the Urim and Thummim. He has led captivity captive; he is conquest on all planes--in the mind, in science, in progress, in certain trials of initiation. He has thus replied to the sphinx, and it is on this account that I have accepted the variation of Éliphas Lévi; two sphinxes thus draw his chariot. He is above all things triumph in the mind.\nIt is to be understood for this reason (a) that the question of the sphinx is concerned with a Mystery of Nature and not of the world of Grace, to which the charioteer could offer no answer; (b) that the planes of his conquest are manifest or external and not within himself; (c) that the liberation which he effects may leave himself in the bondage of the logical understanding; (d) that the tests of initiation through which he has passed in triumph are to be understood physically or rationally; and (e) that if he came to the pillars of that Temple between which the High Priestess is seated, he could not open the scroll called Tora, nor if she questioned him could he answer. He is not hereditary royalty and he is not priesthood."
      },
      {
        type: "major",
        nameShort: "ar08",
        name: "Fortitude",
        value: "8",
        valueInt: 8,
        meaningUp:
          "Power, energy, action, courage, magnanimity; also complete success and honours.",
        meaningRev: "Despotism, abuse if power, weakness, discord, sometimes even disgrace.",
        desc: "A woman, over whose head there broods the same symbol of life which we have seen in the card of the Magician, is closing the jaws of a lion. The only point in which this design differs from the conventional presentations is that her beneficent fortitude has already subdued the lion, which is being led by a chain of flowers. For reasons which satisfy myself, this card has been interchanged with that of justice, which is usually numbered eight. As the variation carries nothing with it which will signify to the reader, there is no cause for explanation. Fortitude, in one of its most exalted aspects, is connected with the Divine Mystery of Union; the virtue, of course, operates in all planes, and hence draws on all in its symbolism. It connects also with innocentia inviolata, and with the strength which resides in contemplation.\nThese higher meanings are, however, matters of inference, and I do not suggest that they are transparent on the surface of the card. They are intimated in a concealed manner by the chain of flowers, which signifies, among many other things, the sweet yoke and the light burden of Divine Law, when it has been taken into the heart of hearts. The card has nothing to do with self-confidence in the ordinary sense, though this has been suggested--but it concerns the confidence of those whose strength is God, who have found their refuge in Him. There is one aspect in which the lion signifies the passions, and she who is called Strength is the higher nature in its liberation. It has walked upon the asp and the basilisk and has trodden down the lion and the dragon."
      },
      {
        type: "major",
        nameShort: "ar09",
        name: "The Hermit",
        value: "9",
        valueInt: 9,
        meaningUp:
          "Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.",
        meaningRev: "Concealment, disguise, policy, fear, unreasoned caution.",
        desc: 'The variation from the conventional models in this card is only that the lamp is not enveloped partially in the mantle of its bearer, who blends the idea of the Ancient of Days with the Light of the World It is a star which shines in the lantern. I have said that this is a card of attainment, and to extend this conception the figure is seen holding up his beacon on an eminence. Therefore the Hermit is not, as Court de Gebelin explained, a wise man in search of truth and justice; nor is he, as a later explanation proposes, an especial example of experience. His beacon intimates that "where I am, you also may be."\nIt is further a card which is understood quite incorrectly when it is connected with the idea of occult isolation, as the protection of personal magnetism against admixture. This is one of the frivolous renderings which we owe to Éliphas Lévi. It has been adopted by the French Order of Martinism and some of us have heard a great deal of the Silent and Unknown Philosophy enveloped by his mantle from the knowledge of the profane. In true Martinism, the significance of the term Philosophe inconnu was of another order. It did not refer to the intended concealment of the Instituted Mysteries, much less of their substitutes, but--like the card itself--to the truth that the Divine Mysteries secure their own protection from those who are unprepared.'
      }
    ]);
  };

  useEffect(() => {
    fetchTaroSequence();
  }, []);

  return (
    <> <div className="container mx-auto max-w-[1320px] flex flex-col">
        <div className="flex justify-between">
          <button className="button text-white bg-red hover:bg-orange">{userId}</button>
          <button className="button bg-orange hover:bg-red">Выбор для "{teamId}"</button>
        </div>
      </div>
      <div class="absolute bottom-0 left-0 right-0 top-[282px] bg-teal-container rounded-lg shadow-lg p-8">
        <div className="h-full flex flex-col items-center gap-8">
          <div className="w-full max-w-[1320px] flex justify-between">
            <div className="flex gap-4 items-baseline">
              <div className="text-lg font-semibold">{cast.title}</div>
              <div className="text-iridium">Информация о раскладе</div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="font-semibold text-purple">{cast.metrics}</div>
            </div>
          </div>
          <div className="grow w-full flex items-center">
            <Carousel>
              {data.map((item, index) => (
                <TaroCard key={index} data={item} rev={Math.random() < 0.5} />
              ))}
            </Carousel>
          </div>
          <div className="w-full max-w-[1320px] flex justify-between">
            <div className="flex items-center">
              {cast.summary}
            </div>
            <div className="flex gap-4 items-center justify-end">
              <div
                onClick={() => navigate(`/candidates/${teamId}`)}
                className="text-sm font-semibold text-red cursor-pointer underline"
              >
                Вернуться к кандидатам
              </div>
              <button className="button bg-teal hover:bg-red text-white">Выбрать кандидата</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidatesTaro;
