package team.side.review.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import team.side.review.models.dto.CampaignCreateRequestDto;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;

@WebMvcTest(CampaignController.class)
@Import({CampaignController.class})
class CampaignControllerTest {

    @Autowired
    private ObjectMapper objectMapper;

    @Autowired
    private MockMvc mockMvc;

    @Test
    @DisplayName("등록 성공")
    void createCampaign_success() throws Exception {
        //given
        String requestJSON = "{\n" +
                "  \"campaignType\": \"VISIT\",\n" +
                "  \"category\": \"카테고리\",\n" +
                "  \"name\": \"제목\",\n" +
                "  \"regStartDateTime\": \"2024-03-08T09:00:00\",\n" +
                "  \"regEndDateTime\": \"2024-03-10T09:00:00\",\n" +
                "  \"noticeDateTime\": \"2024-03-20T09:00:00\",\n" +
                "  \"expStartDateTime\": \"2024-03-30T09:00:00\",\n" +
                "  \"expEndDateTime\": \"2024-04-05T09:00:00\",\n" +
                "  \"content\": \"내용\",\n" +
                "  \"recruitNumber\": 100,\n" +
                "  \"searchTags\": [\n" +
                "    \"태그1\",\n" +
                "    \"태그2\"\n" +
                "  ],\n" +
                "  \"location\": \"서울시 강남구\",\n" +
                "  \"siteUrl\": \"https://www.example.com\",\n" +
                "  \"imageUrls\": [\n" +
                "    \"https://www.example.com/image1.jpg\",\n" +
                "    \"https://www.example.com/image2.jpg\"\n" +
                "  ]\n" +
                "}";

        CampaignCreateRequestDto campaignCreateRequestDto =
                objectMapper.readValue(requestJSON, CampaignCreateRequestDto.class);

        // when
        ResultActions resultActions = mockMvc.perform(
                MockMvcRequestBuilders.post("/api/campaign")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(campaignCreateRequestDto))
        );

        // then
        resultActions
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.campaignId").isNumber())
                .andDo(print());
    }

    @Test
    @DisplayName("LocalDateTime 변환 테스트")
    void localDateTimeDeserializerTest() throws JsonProcessingException {
        String json = "{\"regStartDateTime\": \"2024-03-08T09:00:00\"}";
        CampaignCreateRequestDto dto = objectMapper.readValue(json, CampaignCreateRequestDto.class);

        LocalDateTime result = LocalDateTime.of(2024, 3, 8, 9, 0);
        assertEquals(result, dto.getRegStartDateTime());
    }

}