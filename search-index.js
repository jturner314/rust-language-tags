var searchIndex = {};
searchIndex['language_tags'] = {"items":[[0,"","language_tags","Language tags can be used identify human languages, scripts e.g. Latin script, countries and\nother regions.",null,null],[3,"LanguageTag","","A language tag as described in [BCP47](http://tools.ietf.org/html/bcp47).",null,null],[12,"language","","Language subtags are used to indicate the language, ignoring all\nother aspects such as script, region or spefic invariants.",0,null],[12,"extlangs","","Extended language subtags are used to identify certain specially\nselected languages that, for various historical and compatibility\nreasons, are closely identified with or tagged using an existing\nprimary language subtag.",0,null],[12,"script","","Script subtags are used to indicate the script or writing system\nvariations that distinguish the written forms of a language or its\ndialects.",0,null],[12,"region","","Region subtags are used to indicate linguistic variations associated\nwith or appropriate to a specific country, territory, or region.\nTypically, a region subtag is used to indicate variations such as\nregional dialects or usage, or region-specific spelling conventions.\nIt can also be used to indicate that content is expressed in a way\nthat is appropriate for use throughout a region, for instance,\nSpanish content tailored to be useful throughout Latin America.",0,null],[12,"variants","","Variant subtags are used to indicate additional, well-recognized\nvariations that define a language or its dialects that are not\ncovered by other available subtags.",0,null],[12,"extensions","","Extensions provide a mechanism for extending language tags for use in\nvarious applications.  They are intended to identify information that\nis commonly used in association with languages or language tags but\nthat is not part of language identification.",0,null],[12,"privateuse","","Private use subtags are used to indicate distinctions in language\nthat are important in a given context by private agreement.",0,null],[4,"Error","","Defines an Error type for langtags.",null,null],[13,"DuplicateExtension","","The same extension subtag is only allowed once in a tag before the private use part.",1,null],[13,"EmptyExtension","","If an extension subtag is present, it must not be empty.",1,null],[13,"EmptyPrivateUse","","If the `x` subtag is present, it must not be empty.",1,null],[13,"ForbiddenChar","","The langtag contains a char that is not A-Z, a-z, 0-9 or the dash.",1,null],[13,"InvalidSubtag","","A subtag fails to parse, it does not match any other subtags.",1,null],[13,"InvalidLanguage","","The given language subtag is invalid.",1,null],[13,"SubtagTooLong","","A subtag may be eight characters in length at maximum.",1,null],[13,"TooManyExtlangs","","At maximum three extlangs are allowed, but zero to one extlangs are preferred.",1,null],[6,"Result","","Result type used for this library.",null,null],[17,"GRANDFATHERED","","Contains all grandfathered tags.",null,null],[11,"eq","","",1,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"bool"}}],[11,"fmt","","",1,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",1,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"fmt","","",1,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"languagetag"}],"output":{"name":"languagetag"}}],[11,"default","","",0,{"inputs":[{"name":"languagetag"}],"output":{"name":"languagetag"}}],[11,"fmt","","",0,{"inputs":[{"name":"languagetag"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"matches","","Matches language tags. The first language acts as a language range, the second one is used\nas a normal language tag. None fields in the language range are ignored. If the language\ntag has more extlangs than the range these extlangs are ignored. Matches are\ncase-insensitive. `*` in language ranges are represented using `None` values. The language\nrange `*` that matches language tags is created by the default language tag:\n`let wildcard: LanguageTag = Default::default();.`",0,{"inputs":[{"name":"languagetag"},{"name":"languagetag"}],"output":{"name":"bool"}}],[11,"is_language_range","","Checks if it is a language range, meaning that there are no extension and privateuse tags.",0,{"inputs":[{"name":"languagetag"}],"output":{"name":"bool"}}],[11,"canonicalize","","Returns the canonical version of the language tag.",0,{"inputs":[{"name":"languagetag"}],"output":{"name":"languagetag"}}],[11,"eq","","",0,{"inputs":[{"name":"languagetag"},{"name":"languagetag"}],"output":{"name":"bool"}}],[11,"from_str","","",0,{"inputs":[{"name":"languagetag"},{"name":"str"}],"output":{"name":"result"}}],[11,"fmt","","",0,{"inputs":[{"name":"languagetag"},{"name":"formatter"}],"output":{"name":"result"}}],[14,"langtag!","","Utility for creating simple language tags.",null,null]],"paths":[[3,"LanguageTag"],[4,"Error"]]};
initSearch(searchIndex);
