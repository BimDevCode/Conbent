using AutoMapper;
using Conbent.Article.API.DTOs;
using Conbent.Article.Core.Entities;

namespace Conbent.Article.API.Helpers;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        CreateMap<ArticleEntity, ArticleDto>()
            .ForMember(d => d.Texts, o 
                => o.MapFrom(s => s.Texts!.Select(x => x.Content)))
            .ReverseMap();
    }
}